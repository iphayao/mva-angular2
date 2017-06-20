import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tasks',
    template: `<h4>This is the task components</h4>
               <h5 *ngIf="toggle">Hello World</h5>
               <ul>
                    <li *ngFor="let person of people">
                        {{ person }}
                    </li>
               </ul>`,
})

export class TasksComponent implements OnInit {
    constructor() {}
    toggle: boolean = true;
    people: Array<string> = ["Person1", "Person2", "Person3"];
    ngOnInit() { }
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

bootstrap(AppComponent);