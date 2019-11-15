import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-admin-mentor',
  templateUrl: './admin-mentor.component.html',
  styleUrls: ['./admin-mentor.component.scss']
})
export class AdminMentorComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listMentors();
  } 

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  displayedColumns = [];
  dataSource;
  listMentors = function () {
    this.http.get("https://localhost:44370/api/admin/users/2").subscribe(
      (result: any[]) => {
        this.mentorList = result;
        //console.log(JSON.stringify(this.mentorList));
        this.displayedColumns = Object.keys(this.mentorList[1]).concat(['Actions']);;
        this.dataSource = new MatTableDataSource(this.mentorList);

        console.log("mentorList given below");
        console.log(this.mentorList);
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
