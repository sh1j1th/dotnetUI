import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-payments-history',
  templateUrl: './student-payments-history.component.html',
  styleUrls: ['./student-payments-history.component.scss']
})
export class StudentPaymentsHistoryComponent implements OnInit {

  studentEmail = localStorage.getItem('email');

  constructor(
    private http: HttpClient,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getHistory();
  }

  tableData;
  getHistory(){
    this.http.get("https://localhost:44370/api/student/paymentHistory/"+this.studentEmail).subscribe(
      (result: any[]) => {
        this.tableData = result;
        console.log(result);

      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }

}
