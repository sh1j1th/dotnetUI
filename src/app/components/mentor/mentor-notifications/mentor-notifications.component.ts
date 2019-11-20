import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-mentor-notifications',
  templateUrl: './mentor-notifications.component.html',
  styleUrls: ['./mentor-notifications.component.scss']
})
export class MentorNotificationsComponent implements OnInit {

  mentorEmail = localStorage.getItem('email');

  constructor(
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getNotifications();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  displayedColumns = [];
  dataSource;
  getNotifications = function () {
    this.http.get("https://localhost:44370/api/mentor/mentorNotifications/"+this.mentorEmail).subscribe(
      (result: any[]) => {
        this.notificationList = result;
        this.displayedColumns = Object.keys(this.notificationList[0]).concat(['Actions']);;
        this.dataSource = new MatTableDataSource(this.notificationList);

      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }

  approveRequest(registrationId: number, isApproved: boolean){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.put("https://localhost:44370/api/mentor/courseRequestUpdate/"+registrationId,
     isApproved,{ headers: headers, responseType: "text" }).subscribe(
      (result: any) => {
        console.log(result);
      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }
  rejectRequest(registrationId: number, isApproved: boolean){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.put("https://localhost:44370/api/mentor/courseRequestUpdate/"+registrationId,
     isApproved,{ headers: headers, responseType: "text" }).subscribe(
      (result: any) => {
        console.log(result);
      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }
}
