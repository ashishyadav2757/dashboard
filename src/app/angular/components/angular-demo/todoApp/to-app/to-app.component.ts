import { Component, OnInit } from '@angular/core';
import { Todo} from '../modal/todoModal';
import {ToServiceService} from '../services/to-service.service'

@Component({
  selector: 'app-to-app',
  templateUrl: './to-app.component.html',
  styleUrls: ['./to-app.component.sass']
})
export class ToAppComponent implements OnInit {
  Todo:any;
  todos:Todo[] = [];
  constructor(private _toService:ToServiceService) {

   }

  ngOnInit(): void {
    this._toService.getTodos().subscribe((todos) =>{
      this.todos = todos
      })

  }

  changeStatusData(todo:Todo){
   this._toService.changeStatus(todo)
  }

  deleteRodo(todo:Todo){
    this._toService.deleteTodo(todo);

  }

}
