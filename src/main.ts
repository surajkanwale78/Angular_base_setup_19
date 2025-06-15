import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // ✅ MUST IMPORT THIS

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()] // ✅ MUST BE HERE
});
