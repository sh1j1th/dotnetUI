import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSliderChange } from '@angular/material';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-ongoing-courses-student',
  templateUrl: './ongoing-courses-student.component.html',
  styleUrls: ['./ongoing-courses-student.component.scss']
})
export class OngoingCoursesStudentComponent implements OnInit {

  studentEmail = localStorage.getItem('email');

  constructor(
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.listOngoingCourses();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  tableData;
  displayedColumns = [];
  dataSource;
  listOngoingCourses = function () {
    // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // this.studentEmail = {"studentEmail":this.studentEmail}
    // this.studentEmail = JSON.stringify(this.studentEmail);
    this.http.get("https://localhost:44370/api/student/ongoingCourses/"+this.studentEmail).subscribe(
      (result: any[]) => {
        this.tableData = result;
        console.log(result);
        this.ongoingCourses = result;
        this.displayedColumns = Object.keys(this.ongoingCourses[0]);
        this.dataSource = new MatTableDataSource(this.ongoingCourses);

      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }
  onInputChange(event: MatSliderChange) {
    console.log("This is emitted as the thumb slides");
    console.log(event.value);
  }

}
