import {Component} from '@angular/core';
import {MyComponent} from './my-component.component';

@Component({
    selector: 'my-app',
    template: `<h1 *ngIf="showHeading" >My First Angular 2 App</h1>
        <span [ngSwitch]="names">
          <span *ngSwitchWhen="'Sri'">Srikanth</span>
          <span *ngSwitchWhen="'Ven'">Venkat</span>
          <span *ngSwitchDefault>Ravi</span>
        </span>
        <br>
        <br>
        <ul>
          <li *ngFor="let color of colors">
            {{color}}
          </li>
        </ul>
        <hr>
        <my-component></my-component>`,
    directives: [MyComponent]
})

export class AppComponent {
  private showHeading;
  private names;
  private colors;

  constructor(){
    this.showHeading = true;
    this.names = "Sri";
    this.colors = ['Red', 'Blue', 'Green'];
  }
}
