import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tasks',
    template: `<h4>This is the task components</h4>
               <span>Number is {{ num }}</span><br>
               <p><button (click)="onClick()">Click me!</button></p>
               <p><button (mouseenter)="onMouseEnter()">Mouse enter me!</button></p>
               <p><input [(ngModel)]="sample"> <span>{{ sample }}</span></p>`
})

export class TasksComponent implements OnInit {
    constructor() {}
    
    num: number = 17;
    sample: string = "";

    ngOnInit() { }

    onClick() {
        alert("Button Clicked!")
    }

    onMouseEnter() {
        alert("Mouse Entered!")
    }

}

@Component({
    selector: 'my-app',
    directives: [TasksComponent],
    template: `<h1>Hello World</h1>
               <tasks></tasks>`
})

export class AppComponent implements OnInit {
    constructor() {}

    ngOnInit() { }
}

bootstrap(AppComponent)