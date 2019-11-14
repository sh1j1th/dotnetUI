import { Component, Output, EventEmitter, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-tech-dialog',
  templateUrl: './edit-tech-dialog.component.html',
  styleUrls: ['./edit-tech-dialog.component.scss']
})
export class EditTechDialogComponent implements OnInit {

  dialogId: any;
@Output() submitClicked = new EventEmitter<any>();

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<EditTechDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit() {
    this.dialogId = this.data.dialogId;
    this.listTechnology();
  }
  displayedColumns = [];
  dataSource;
  listTechnology = function () {
    this.http.get("https://localhost:44370/api/admin/"+this.dialogId).subscribe(
      (result: any[]) => {
        console.log(result)
         this.technologyList = result;
        // this.displayedColumns = Object.keys(this.technologyList[0]).concat(['Actions']);;
        // this.dataSource = new MatTableDataSource(this.technologyList);

        // console.log("technologyList given below");
        // console.log(this.technologyList);
        // console.log("dataSource given below");
        // console.log(this.dataSource)
      }, 
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }

  // saveMessage() {
  //   const data = 'Your data';
  //   this.submitClicked.emit(data);
  //   this.dialogRef.close();
  // }

  closeDialog() {
    this.dialogRef.close();
  }
}
