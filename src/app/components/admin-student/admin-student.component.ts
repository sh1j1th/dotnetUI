import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.scss']
})
export class AdminStudentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listStudents();
  } 

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  displayedColumns = [];
  dataSource;
  listStudents = function () {
    this.http.get("https://localhost:44370/api/admin/users/2").subscribe(
      (result: any[]) => {
        this.studentList = result;
        this.displayedColumns = Object.keys(this.studentList[0]).concat(['Actions']);;
        this.dataSource = new MatTableDataSource(this.studentList);

        console.log("studentList given below");
        console.log(this.studentList);
        console.log("dataSource given below");
        console.log(this.dataSource)
      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }
}
