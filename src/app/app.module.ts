import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainModule } from "./main/main.module";

import { AppComponent } from './app.component';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'main'}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
