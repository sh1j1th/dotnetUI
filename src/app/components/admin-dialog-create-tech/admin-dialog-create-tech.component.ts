import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-dialog-create-tech',
  templateUrl: './admin-dialog-create-tech.component.html',
  styleUrls: ['./admin-dialog-create-tech.component.scss']
})
export class AdminDialogCreateTechComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminDialogCreateTechComponent>,
    private http: HttpClient
    ) { }
  
    ngOnInit() { }
    
  //add technology
  createTech(cForm){
    cForm = JSON.stringify(cForm);
    console.log(cForm);
    let Headers = new HttpHeaders({ 'Content-Type': 'application/json' })

    this.http.post("https://localhost:44370/api/admin", cForm,
      { headers: Headers, responseType: 'text' }).subscribe(
        (result) => {
          console.log(result)
          console.log("ADDED COURSE successfully")
        },
        (error) => {
          console.log(error)
          alert("Error occured, check whether Backend is running!");
        }
      )
  }
}

