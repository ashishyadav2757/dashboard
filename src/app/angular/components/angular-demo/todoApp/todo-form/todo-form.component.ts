import { Component, OnInit } from '@angular/core';
import {Todo} from '../modal/todoModal';
import { v4 as uuidv4 } from 'uuid';
import { ToServiceService } from '../services/to-service.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.sass']
})
export class TodoFormComponent implements OnInit {
    toTitle:string =''
  constructor(private _ToServiceService:ToServiceService) {

  }

  ngOnInit(): void {
  }

  handleAdd(){
    const newTodo:Todo  ={
      id:  uuidv4(),
      title:this.toTitle,
      date:new Date(),
      iscompleted :false,

    }
  this._ToServiceService.addTodos(newTodo);
  this.toTitle = ''

  }


}
