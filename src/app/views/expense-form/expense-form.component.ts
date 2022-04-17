import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExpenseForm } from './expense-form';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {

  title ="Expense Form"
  categories = ["Food", "Clothes", "Electronics", "House wares", "Other"]

  originalForm : ExpenseForm = {
    store: null,
    address: null,
    city: null,
    state: null,
    date: null,
    amount: null,
    category: null
  }

  expenseEntry: ExpenseForm = {...this.originalForm}

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(this.expenseEntry)
  }

}
