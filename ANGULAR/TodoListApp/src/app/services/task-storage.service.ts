import { Injectable } from '@angular/core';

@Injectable()
export class TaskStorageService {

  constructor() { }

  // -- Récupérer la liste des tâches
  getTask () {
    return JSON.parse(localStorage.getItem('tasks'));
  }

  // -- Sauvegarder les tâches (stringify inverse de parse ??) dans stockage de l'ordi
  save(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }


}
