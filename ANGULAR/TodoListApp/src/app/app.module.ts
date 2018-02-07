import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddtaskComponent } from './addtask/addtask.component';
import {TaskStorageService} from './services/task-storage.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TaskStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
