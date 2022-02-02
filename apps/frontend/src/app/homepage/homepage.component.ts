import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'todo1-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(private http: HttpClient) {}

  todos: any = [];
  newTodo: any = '';

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo() {
    this.http.get('http://localhost:8000/api/all-todo/').subscribe((data) => {
      console.log(data);

      this.todos = data;
    });
  }

  addTodo() {
    this.http
      .post('http://localhost:8000/api/add-todo/', { name: this.newTodo })
      .subscribe((result) => {
        this.newTodo = '';
        this.getTodo();
        console.log(result);
      });
  }

  deleteTodo(id: any) {
    this.http
      .delete(`http://localhost:8000/api/delete-todo/${id}`)
      .subscribe((result) => {
        this.getTodo();
        console.log(result);
      });
  }
}
