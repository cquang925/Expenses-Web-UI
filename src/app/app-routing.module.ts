import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EntryFormComponent } from './views/entry-form/entry-form.component';
import { DisplayComponent } from './views/display/display.component';

const routes: Routes = [
  {path: '', redirectTo: 'entry', pathMatch: 'full'},
  {path: 'entry', component:EntryFormComponent}, 
  {path: 'display', component:DisplayComponent} 
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
