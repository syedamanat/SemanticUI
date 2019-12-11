import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from '../test/test.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path:'main', component: MainComponent },
  { path:'test', component: TestComponent }
]

@NgModule({
  declarations: [MainComponent, TestComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
