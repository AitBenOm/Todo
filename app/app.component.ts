import { Component } from '@angular/core';

import {AppFormulaireComponent} from './app.formulaire.component';
import {Todo} from './Todo';
import {todos} from './Lists';
import {AppDetailComponent} from "./app.detail.component";




@Component({
    selector: 'todo-app',
    templateUrl:  'app/template.html',
  directives: [ AppDetailComponent],
  styleUrls: ['app/app.component.css']

})

export class AppComponent {
list= todos;

todoSelected: Todo;
setClasse(todo: Todo) {
  let classe = {
    faible: todo.priority == 'faible',
    moyenne: todo.priority == 'moyenne',
    haute: todo.priority == 'haute',
    fait: todo.estFait == true
  };
  return classe;
}
  Supprimer(index: number) {
    this.list.splice(index, 1);
  }
Done(index: number){
this.list[index].estFait=true;
}
  Afficher(todo: Todo) {
  console.log(todo);
  this.todoSelected = todo;
  }

}
