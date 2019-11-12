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
  //try to add keys here, if not give col fields explicitly:(
  //GET SOMETHING FROM SERVICE 
  this.listi = this.listeciServis.listecidenKisi;
  this.listecidenVazife = this.listeciServis.listecidenVazife;
  
  //FILL TABLE DATASOURCE 
  var obj = {};
  for (let i in this.listecidenKisi ){
      for( let v of this.listd[i].vazifeSonuclar){
          obj[v.name] = v.value;
      }
      this.vzfPuanTablo.push(obj);
      obj={};
  }
  
  //CREATE DISPLAYED COLUMNS DYNAMICALLY
  this.displayedColumns = [];
  for( let v in this.vzfPuanTablo[0]){
      this.displayedColumns.push(v);
  }
  
  //INITIALIZE MatTableDataSource
  this.dataSource = new MatTableDataSource(this.vzfPuanTablo);


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
