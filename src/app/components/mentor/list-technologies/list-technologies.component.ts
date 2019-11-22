import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { DialogCreateCourseComponent } from '../dialog-create-course/dialog-create-course.component';

@Component({
  selector: 'app-list-technologies',
  templateUrl: './list-technologies.component.html',
  styleUrls: ['./list-technologies.component.scss']
})
export class ListTechnologiesComponent implements OnInit {

  mentorEmail = localStorage.getItem('email'); 

  constructor(
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.listTechnology();
  }

  showDialog() {
    const dialogRef = this.dialog.open(DialogCreateCourseComponent, {
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
    this.http.get("https://localhost:44370/api/mentor/listTech",
    {Authorization: 'Bearer ' + localStorage.getItem('token')}).subscribe(
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

  openDialog(technologyId:number): void {
 
      
   const dialogRef = this.dialog.open(DialogCreateCourseComponent, {
     width: 'auto',
     data: { mentorEmail: this.mentorEmail, technologyId: technologyId}
   });
   dialogRef.afterClosed().subscribe(result => {
   });

   const dialogSubmitSubscription =
     dialogRef.componentInstance.submitClicked.subscribe(result => {
       dialogSubmitSubscription.unsubscribe();
     });
 }

}
