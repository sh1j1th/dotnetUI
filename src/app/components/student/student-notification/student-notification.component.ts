import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-student-notification',
  templateUrl: './student-notification.component.html',
  styleUrls: ['./student-notification.component.scss']
})
export class StudentNotificationComponent implements OnInit {

  studentEmail = localStorage.getItem('email');

  constructor(
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.approveNotifications();
    this.rejectNotifications();
  }
  approveData;
  rejectData;
  approveNotifications = function () {
    // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // this.studentEmail = {"studentEmail":this.studentEmail}
    // this.studentEmail = JSON.stringify(this.studentEmail);
    this.http.get("https://localhost:44370/api/student/approved/"+this.studentEmail).subscribe(
      (result: any[]) => {
        this.approveData = result;

      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }
  rejectNotifications = function () {
    // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // this.studentEmail = {"studentEmail":this.studentEmail}
    // this.studentEmail = JSON.stringify(this.studentEmail);
    this.http.get("https://localhost:44370/api/student/rejected/"+this.studentEmail).subscribe(
      (result: any[]) => {
        this.rejectData = result;
      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }


}
