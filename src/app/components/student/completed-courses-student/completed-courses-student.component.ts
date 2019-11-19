import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-completed-courses-student',
  templateUrl: './completed-courses-student.component.html',
  styleUrls: ['./completed-courses-student.component.scss']
})
export class CompletedCoursesStudentComponent implements OnInit {
  studentEmail = localStorage.getItem('email');

  constructor(
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.listCompletedCourses();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  displayedColumns = [];
  dataSource; 
  listCompletedCourses = function () {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.studentEmail = JSON.stringify(this.studentEmail);
    this.http.post("https://localhost:44370/api/student/completedCourses", this.studentEmail,
      { headers: headers, responseType: "json" }).subscribe(
        (result: any[]) => {
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

