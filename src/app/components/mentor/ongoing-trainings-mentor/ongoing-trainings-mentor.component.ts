import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-ongoing-trainings-mentor',
  templateUrl: './ongoing-trainings-mentor.component.html',
  styleUrls: ['./ongoing-trainings-mentor.component.scss']
})
export class OngoingTrainingsMentorComponent implements OnInit {

  mentorEmail = localStorage.getItem('email');

  constructor(
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.listOngoingTrainings();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  displayedColumns = [];
  dataSource;
  listOngoingTrainings = function () {
    // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // this.mentorEmail = {"mentorEmail":this.mentorEmail}
    // this.mentorEmail = JSON.stringify(this.mentorEmail);
    // console.log(this.mentorEmail);

    this.http.get("https://localhost:44370/api/mentor/ongoingTrainings/"+this.mentorEmail,
    {responseType: "text" }).subscribe(
      (result: any[]) => {

        this.ongoingTrainings = result;
        console.log(this.ongoingTrainings)
        this.displayedColumns = Object.keys(this.ongoingTrainings[1]);
        console.log(this.displayedColumns);
        this.dataSource = new MatTableDataSource(this.ongoingTrainings);
        console.log(this.dataSource);

      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }

}
