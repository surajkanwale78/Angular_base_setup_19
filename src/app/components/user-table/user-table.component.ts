import { Component } from '@angular/core';
// import { PostService } from '../services/post.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-table',
  imports: [CommonModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  posts: any[] = [];
  filteredPosts: any[] = [];
  loading = false;
  searchSubject = new Subject<string>();
  constructor(private userService: UserService) {}
   ngOnInit() {
    this.loading = true;
    this.userService.getPosts().subscribe(data => {
      this.posts = data;
      this.filteredPosts = data;
      this.loading = false;
    });

    this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(searchText => {
      this.filteredPosts = this.posts.filter(post =>
        post.title.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  }

  onSearch(value: string) {
    this.searchSubject.next(value);
  }
}
