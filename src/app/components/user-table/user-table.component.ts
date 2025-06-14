import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-table',
  imports: [],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent implements OnInit {
  posts: any[] = [];
  paginatedPosts: any[] = [];
  loading = false;
  itemsPerPage = 10;
  currentPage = 1;
  totalPages = 0;

  constructor(private userService : UserService) {}
  ngOnInit() {
    this.loading = true;
    this.userService.getPosts().subscribe(data => {
      this.posts = data;
      this.totalPages = Math.ceil(this.posts.length / this.itemsPerPage);
      this.setPage(1);
      this.loading = false;
    });
  }
  setPage(page: number) {
    this.currentPage = page;
    const start = (page - 1) * this.itemsPerPage;
    this.paginatedPosts = this.posts.slice(start, start + this.itemsPerPage);
  }
  }
