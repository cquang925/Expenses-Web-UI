import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExpenseForm } from './expense-form';
import { ExpenseService } from 'src/app/shared/expense.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {

  title ="Expense Form"
  categories = ["Food", "Clothes", "Electronics", "House wares", "Other"]

  expenseEntry : ExpenseForm = {
    store: null,
    address: null,
    city: null,
    state: null,
    date: null,
    amount: null,
    category: null
  }

  constructor( private expenseService: ExpenseService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    if(form.valid) {
      this.expenseService.addExpense(this.expenseEntry)
        .subscribe(result => console.log(result));
      form.resetForm();
    }
  }

}
