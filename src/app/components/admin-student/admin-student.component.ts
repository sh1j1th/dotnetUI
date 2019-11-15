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
    this.http.get("https://localhost:44370/api/admin/users/1").subscribe(
      (result: any[]) => {
        this.studentList = result;
        //console.log(JSON.stringify(this.studentList));
        this.displayedColumns = Object.keys(this.studentList[1]).concat(['Actions']);;
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

  modifyAccess(id: string, isEnabled: string){
    this.http.put("https://localhost:44370/api/admin/"+id, isEnabled).subscribe(
      (result : any[]) => {
        
        console.log(result);
        
      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }
  
}
