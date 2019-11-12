import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminDialogCreateTechComponent } from '../admin-dialog-create-tech/admin-dialog-create-tech.component';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-admin-technology',
  templateUrl: './admin-technology.component.html',
  styleUrls: ['./admin-technology.component.scss']
})
export class AdminTechnologyComponent implements OnInit {
  columnsToDisplay = ['Id'];


  constructor(
    private http: HttpClient,
    public dialog: MatDialog
    ) { }

  ngOnInit() { 
    this.listTechnology();
  }
  showDialog(){
    const dialogRef = this.dialog.open(AdminDialogCreateTechComponent, {
      width: 'auto',
      height: 'auto'
    }); 
  }

  //get technologies
  technologyList = []
  listTechnology = function () {
    this.http.get("https://localhost:44370/api/admin").subscribe(
      (result: any[]) => {
        this.technologyList = result;
        console.log(this.technologyList)
        this.error_message = ""
      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
    }
}
