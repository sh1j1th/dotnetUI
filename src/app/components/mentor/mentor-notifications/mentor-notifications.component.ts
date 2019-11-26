import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-notifications',
  templateUrl: './mentor-notifications.component.html',
  styleUrls: ['./mentor-notifications.component.scss']
})
export class MentorNotificationsComponent implements OnInit {

  mentorEmail = localStorage.getItem('email');

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getNotifications();
  }
  
tableData;

  getNotifications = function () {
    this.http.get("https://localhost:44319/mentorservice/mentorNotifications/"+this.mentorEmail).subscribe(
      (result: any[]) => {
        this.tableData = result;
        console.log(this.tableData)
        this.notificationList = result;
        
      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }

  approveRequest(registrationId: number, isApproved: boolean){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.put("https://localhost:44319/mentorservice/courseRequestUpdate/"+registrationId,
     isApproved,{ headers: headers, responseType: "text" }).subscribe(
      (result: any) => {
        console.log(result);
        this._router.navigateByUrl('mentorDashboard', { skipLocationChange: true }).then(() => {
          this._router.navigate(['mentorDashboard/mentorNotifications']);
        });
      },
      (error) => {
        switch(error.status){
          case 400: alert("Invalid input");
          break;
          case 401: alert("Unauthorized access, contact support");
          break;
          case 404: alert("Page not found, redirecting to home");
          break;
          case 500: alert("Internal server error, retry after sometime");
          break;
          case 502: alert("Bad Gateway");
          break;
        }
      }
    )
  }
  rejectRequest(registrationId: number, isApproved: boolean){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.put("https://localhost:44319/mentorservice/courseRequestUpdate/"+registrationId,
     isApproved,{ headers: headers, responseType: "text" }).subscribe(
      (result: any) => {
        console.log(result);
        this._router.navigateByUrl('mentorDashboard', { skipLocationChange: true }).then(() => {
          this._router.navigate(['mentorDashboard/mentorNotifications']);
        });
      },
      (error) => {
        switch(error.status){
          case 400: alert("Invalid input");
          break;
          case 401: alert("Unauthorized access, contact support");
          break;
          case 404: alert("Page not found, redirecting to home");
          break;
          case 500: alert("Internal server error, retry after sometime");
          break;
          case 502: alert("Bad Gateway");
          break;
        }
      }
    )
  }
}
