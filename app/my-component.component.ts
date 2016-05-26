import {Component} from '@angular/core';

@Component({
  selector: 'my-component',
  template: `
      <h1>{{title}}</h1>
      <img bind-src="imageLink" >
      <br>
      <button (click)="runClick()">Click</button>
      <br>
      <input type="text" [(ngModel)]="note" (keyup)="saySomething($event)">
      {{note}}
      `
})

export class MyComponent{
  private title;
  private imageLink;
  private note;

  constructor(){
    this.title = "Hello World";
    this.imageLink = "http://lorempixel.com/400/200";
    this.note;
  }

  runClick(){
    console.log('You Clicked...');
  }

  saySomething(e){
    console.log(e.target.value);
  }
}
