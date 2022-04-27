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
    // this.apiUrl = "https://putsreq.com/3Nl8I0wihfCtHd2OmRRQ"
    this.apiUrl = "http://localhost:8080/api/addexpense"
    this.serFrom = JSON.parse(JSON.stringify(form))
    return (this.http.post(this.apiUrl, this.serFrom))
  }

  getExpenses(): Observable<any> {
    // this.apiUrl = "https://putsreq.com/4xRHbXOgTC729LhHBqQs"
    this.apiUrl = "http://localhost:8080/api/getexpenses"
    return this.http.get(this.apiUrl)
  }

}
