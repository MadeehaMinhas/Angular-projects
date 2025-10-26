import { NgForOf, NgClass } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.html',
    styleUrls: ['./app.css'],
    imports: [RouterOutlet, FormsModule, NgForOf, NgClass]
})
export class AppComponent{
    todoList: TodoItem[] = [];
    newTask: string = '';
    
    addTask():void {
    console.log('Button clicked!');
    if (this.newTask.trim() !== '') {
      const newTodoItem: TodoItem = {
            id: Date.now(),
            task: this.newTask,
            completed: false
        };
         this.todoList.push(newTodoItem);
         console.log(this.todoList);
         this.newTask='';
      }
    }

    toggleComplete (index:number):void{
      //console.log(index);
      this.todoList[index].completed= ! this.todoList[index].completed
      //console.log(this.todoList);
    }
    deleteTask(id:number){
      this.todoList=this.todoList.filter(item => item.id !=id);
      console.log(this.todoList);
    }
}