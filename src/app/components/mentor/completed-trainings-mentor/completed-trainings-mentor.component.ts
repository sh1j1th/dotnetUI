import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-completed-trainings-mentor',
  templateUrl: './completed-trainings-mentor.component.html',
  styleUrls: ['./completed-trainings-mentor.component.scss']
})
export class CompletedTrainingsMentorComponent implements OnInit {
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
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.mentorEmail = JSON.stringify(this.mentorEmail);
    this.http.post("https://localhost:44370/api/mentor/completedTrainings",this.mentorEmail,
    { headers: headers, responseType: "json" }).subscribe(
      (result: any[]) => {
        this.ongoingTrainings = result;
        this.displayedColumns = Object.keys(this.ongoingTrainings[0]);
        this.dataSource = new MatTableDataSource(this.ongoingTrainings);

      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }

}

