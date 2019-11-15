import { Component, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-tech-dialog',
  templateUrl: './edit-tech-dialog.component.html',
  styleUrls: ['./edit-tech-dialog.component.scss']
})
export class EditTechDialogComponent implements OnInit {

  id: number;
  technologyName: string;
  status: string;
  description: string;
  commission: string;
  imageURL: string;
  @Output() submitClicked = new EventEmitter<any>();

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<EditTechDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
    this.id = this.data.id;
    this.technologyName = this.data.technologyName;
    this.commission = this.data.commission;
    this.imageURL = this.data.imageURL;
    this.status = this.data.status;
    this.description = this.data.description;
    
  }
  editTech(editForm){
    console.log(editForm)
    editForm = JSON.stringify(editForm);
    console.log(editForm)
    this.http.put("https://localhost:44370/api/admin/"+this.id, editForm).subscribe(
      (result : any[]) => {
        
        console.log(result);
        
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
