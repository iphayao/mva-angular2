import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>Hello World</h1>'
})

export class AppComponent implements OnInit {
    constructor() {}

    ngOnInit() { }
}

bootstrap(AppComponent);