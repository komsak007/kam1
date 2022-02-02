import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo1-todopage',
  templateUrl: './todopage.component.html',
  styleUrls: ['./todopage.component.css'],
})
export class TodopageComponent implements OnInit {
  constructor(private http: HttpClient) {}

  todos: any = [];

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo() {
    this.http.get('http://localhost:8000/api/all-todo').subscribe((data) => {
      this.todos = data;
      console.log(data);
    });
  }
}
