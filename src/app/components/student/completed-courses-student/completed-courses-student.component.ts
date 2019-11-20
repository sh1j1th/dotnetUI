import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-courses-student',
  templateUrl: './completed-courses-student.component.html',
  styleUrls: ['./completed-courses-student.component.scss']
})
export class CompletedCoursesStudentComponent implements OnInit {
  studentEmail = localStorage.getItem('email');

  constructor(
    private _router: Router,
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.listCompletedCourses();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  tableData;
  displayedColumns = [];
  dataSource;
  listCompletedCourses = function () {
    // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // this.studentEmail = {"studentEmail":this.studentEmail}
    // this.studentEmail = JSON.stringify(this.studentEmail);
    // console.log(this.studentEmail);
    this.http.get("https://localhost:44370/api/student/completedCourses/" + this.studentEmail).subscribe(
      (result: any[]) => {
        this.tableData = result;
        this.completedCourses = result;
        this.displayedColumns = Object.keys(this.completedCourses[0]);
        this.dataSource = new MatTableDataSource(this.completedCourses);
      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }

}

