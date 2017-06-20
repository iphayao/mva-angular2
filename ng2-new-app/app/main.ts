import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, OnInit, Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {
    tasks;// = ["First Task", "Second Task", "Third Task"];

    constructor(private _http: Http) { }
                                                                      
    getTask() {
        var aPromise = this._http.get('/tasks.json')
        .map((response: Response) => response.json().data)
        .toPromise();

        aPromise.then(tasksFromServer => this.tasks = tasksFromServer);
    }
}

@Component({
    selector: 'tasks',
    providers: [TaskService],
    template: `<h4>This is the tasks components</h4>
               {{ taskService.tasks | json }}
               <ul>
                    <li *ngFor="let task of taskService.tasks">
                        {{ task.title }}
                    </li>
               </ul>`
})

export class TasksComponent implements OnInit {
    constructor(public taskService: TaskService) {}

    ngOnInit() {
        this.taskService.getTask();
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

bootstrap(AppComponent, [HTTP_PROVIDERS])