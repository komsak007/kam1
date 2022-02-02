import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TodopageComponent } from './todopage/todopage.component';

export const routes: Routes = [
  { path: 'todo', component: TodopageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: '', redirectTo: '/info', pathMatch: 'full' },
];
