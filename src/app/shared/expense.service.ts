import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ExpenseForm } from '../views/expense-form/expense-form'; 

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  apiUrl!: string;

  constructor() { }

  addExpense(form: ExpenseForm) {
    console.log('this is the service method: ' + form)
  }  

}

