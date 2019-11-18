import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list-technologies',
  templateUrl: './list-technologies.component.html',
  styleUrls: ['./list-technologies.component.scss']
})
export class ListTechnologiesComponent implements OnInit {

  constructor(
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.listTechnology();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  displayedColumns = [];
  dataSource;
  listTechnology = function () {
    this.http.get("https://localhost:44370/api/mentor/listTech").subscribe(
      (result: any[]) => {
        this.technologyList = result;
        this.displayedColumns = Object.keys(this.technologyList[0]).concat(['Actions']);;
        this.dataSource = new MatTableDataSource(this.technologyList);

        console.log("technologyList given below");
        console.log(this.technologyList);
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
