import { Component } from '@angular/core';

/**
 * Generated class for the BatataComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'batata',
  templateUrl: 'batata.html'
})
export class BatataComponent {

  text: string;

  constructor() {
    console.log('Hello BatataComponent Component');
    this.text = 'Hello World';
  }

}
