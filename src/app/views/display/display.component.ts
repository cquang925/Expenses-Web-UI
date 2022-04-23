import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/shared/expense.service';
import { ExpenseForm } from '../expense-form/expense-form';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  displayExp!: ExpenseForm[];

  constructor( private expServ: ExpenseService) { }

  ngOnInit(): void {
    this.expServ.getExpenses().subscribe(
      (expenses) => this.displayExp = expenses
    )
  }

}
