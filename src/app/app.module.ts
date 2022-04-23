import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExpenseFormComponent } from './views/expense-form/expense-form.component';
import { AppRoutingModule } from './app-routing.module';
import { DisplayComponent } from './views/display/display.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { HelpComponent } from './views/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseFormComponent,
    DisplayComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
