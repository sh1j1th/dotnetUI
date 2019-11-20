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
    this.listCompletedTrainings();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  displayedColumns = [];
  dataSource;
  listCompletedTrainings = function () {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.mentorEmail = {"mentorEmail":this.mentorEmail}
    this.mentorEmail = JSON.stringify(this.mentorEmail);
    console.log(this.mentorEmail);
    this.http.post("https://localhost:44370/api/mentor/completedTrainings",this.mentorEmail,
    { headers: headers, responseType: "text" }).subscribe(
      (result: any[]) => {
        this.completedTrainings = result;
        this.displayedColumns = Object.keys(this.completedTrainings[0]);
        this.dataSource = new MatTableDataSource(this.completedTrainings);

      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }

}

