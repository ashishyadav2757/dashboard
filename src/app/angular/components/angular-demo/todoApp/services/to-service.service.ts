import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from "../modal/todoModal";



@Injectable({
  providedIn: 'root'
})
export class ToServiceService {
  Todo:any
  todos:Todo[];
  constructor() {
    this.todos = [
      {
      id:'111',
      title:'Learn Html',
      iscompleted:true,
      date:new Date()
      },
      {
      id:'222',
      title:'Learn css',
      iscompleted:false,
      date:new Date()
      },
      {
      id:'333',
      title:'Learn less',
      iscompleted:true,
      date:new Date()
      },
      {
      id:'444',
      title:'Learn sass',
      iscompleted:true,
      date:new Date()
      },
      {
      id:'555',
      title:'Learn phython',
      iscompleted:true,
      date:new Date()
      },
      {
      id:'666',
      title:'Learn java',
      iscompleted:true,
      date:new Date()
      },

    ]
   }
   getTodos(){
    return of (this.todos)
   }
   addTodos(todo:Todo){
  this.todos.push(todo);
   }
   changeStatus(todo:Todo){

   this.todos.map((singleTodo:any) => {
   if(singleTodo.id == todo.id){
   todo.iscompleted = !todo.iscompleted
   }
   })
   }

   deleteTodo(todo:Todo){
  const indexOfTodo = this.todos.findIndex(
    (currentObj:any) => currentObj.id === todo.id
  )
  this.todos.splice(indexOfTodo,1)
   }
}
