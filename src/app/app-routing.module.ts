import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ExpenseFormComponent } from './views/expense-form/expense-form.component';
import { DisplayComponent } from './views/display/display.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'entry', component: ExpenseFormComponent}, 
  {path: 'display', component: DisplayComponent} 
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
