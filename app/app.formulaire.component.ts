import { Component } from '@angular/core';
import {Todo} from './Todo';
import {todos} from "./Lists";




@Component({
  selector: 'Form-app',
  templateUrl:  'app/app.formulaire.component.html',
  styleUrls: ['app/app.component.css']

})

export class AppFormulaireComponent {
  list= todos;
  NewTodo= new Todo();

  Ntodo: string ;
  Prio: string ;
  Date: string ;
  Desc: string;
  TodoTest: boolean= false;
  TodoErr:string;
  // Ajouter(text: string,  date: Date, priority: string) {
  //   console.log(text);
  //   console.log(date);
  //   console.log(priority);
  //

  TestTodo(text: string){

    if(text.length>5){

      this.TodoTest=true;
    } else{
      this.TodoTest=false;
      this.TodoErr="minimum 8 char";}
    console.log(this.TodoErr);
    console.log(this.TodoTest);
  }
  setClasse() {
    let classe = {
      alert: this.TodoTest === false
    };
    return classe;
  }
    Ajouter(text: string,  date: Date, priority: string , desc: string) {

    this.NewTodo.texte = text;
    this.NewTodo.date = date;
    this.NewTodo.priority = priority;
    this.NewTodo.desc = desc;
    this.NewTodo.estFait = false;
   // console.log(this.NewTodo)
    this.list.push(this.NewTodo);
    this.Ntodo = '';
    this.Prio = '';
    this.Desc = '';
    this.Date = null;

  }

}
