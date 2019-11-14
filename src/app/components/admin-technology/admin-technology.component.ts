import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AdminDialogCreateTechComponent } from '../admin-dialog-create-tech/admin-dialog-create-tech.component';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { EditTechDialogComponent } from '../edit-tech-dialog/edit-tech-dialog.component';




@Component({
  selector: 'app-admin-technology',
  templateUrl: './admin-technology.component.html',
  styleUrls: ['./admin-technology.component.scss']
})
export class AdminTechnologyComponent implements OnInit {
  //try to add keys here, if not give col fields explicitly:(

  constructor(
    private http: HttpClient,
    public dialog: MatDialog
  ) { }


  ngOnInit() {
    this.listTechnology();
  }

  showDialog() {
    const dialogRef = this.dialog.open(AdminDialogCreateTechComponent, {
      width: 'auto',
      height: 'auto'
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  displayedColumns = [];
  dataSource;
  listTechnology = function () {
    this.http.get("https://localhost:44370/api/admin").subscribe(
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
  openDialog(id: number): void {
    alert(id);
    const dialogRef = this.dialog.open(EditTechDialogComponent, {
      width: 'auto',
      data: { dialogId: id }
    });
    dialogRef.afterClosed().subscribe(result => {
    });

    const dialogSubmitSubscription =
      dialogRef.componentInstance.submitClicked.subscribe(result => {
        dialogSubmitSubscription.unsubscribe();
      });
  }
}

