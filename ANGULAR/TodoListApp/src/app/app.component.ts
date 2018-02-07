import { Component } from '@angular/core';
import {Task} from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * On déclare notre tableau de tâches.
   * @type {Task[]}
   */
  tasks: Task[] = [];

  /**
   * Cette fonction se déclenche dans l'application
   * lorsqu'une nouvelle tâche est créée par l'utilisateur
   * dans le composant app-addTask.
   * @param newTaskEvent
   */
  newTask(newTaskEvent) {
    this.tasks.push(newTaskEvent.task);
  }
}
