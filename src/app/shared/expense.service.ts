import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

import { ExpenseForm } from '../views/expense-form/expense-form'; 

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  apiUrl!: string;
  serFrom! : ExpenseForm;

  constructor( private http: HttpClient ) { }

  addExpense(form: ExpenseForm): Observable<any> {
    this.apiUrl = "https://putsreq.com/3Nl8I0wihfCtHd2OmRRQ"
    this.serFrom = JSON.parse(JSON.stringify(form))
    return (this.http.post(this.apiUrl, this.serFrom))
  }

  getExpenses(): Observable<any> {
    this.apiUrl = "https://putsreq.com/4xRHbXOgTC729LhHBqQs"
    return this.http.get(this.apiUrl)
  }

}
