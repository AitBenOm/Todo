import { Component, Input } from '@angular/core';
import {Todo} from './Todo';




@Component({
  selector: 'detail-app',
  templateUrl:  'app/app.detail.component.html',
   styleUrls: ['']

})

export class AppDetailComponent {

 @Input()
todo: Todo;

  edit: boolean = false;
  texteButton: string= "Modifier";

  ModifierToDo(bool: boolean){
    if (bool) {
      this.edit = false;
      this.texteButton = 'Modifier';
    }else {
      this.edit = true;
      this.texteButton = 'Sauvgarder';
    }
  }



}
