import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpenseFormComponent } from './views/expense-form/expense-form.component';
import { DisplayComponent } from './views/display/display.component';
import { HomeComponent } from './views/home/home.component';
import { HelpComponent } from './views/help/help.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'entry', component: ExpenseFormComponent}, 
  {path: 'display', component: DisplayComponent},
  {path: 'help', component: HelpComponent}
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
