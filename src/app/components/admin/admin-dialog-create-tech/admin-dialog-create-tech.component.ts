import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminTechnologyComponent } from '../admin-technology/admin-technology.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-dialog-create-tech',
  templateUrl: './admin-dialog-create-tech.component.html',
  styleUrls: ['./admin-dialog-create-tech.component.scss']
})
export class AdminDialogCreateTechComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminDialogCreateTechComponent>,
    private http: HttpClient,
    private _router: Router,
    private activeRoute: ActivatedRoute
    ) { }
  
    ngOnInit() { }
    
  //add technology
  createTech(cForm){
    cForm = JSON.stringify(cForm);
    console.log(cForm);
    let Headers = new HttpHeaders({ 'Content-Type': 'application/json' })

    this.http.post("https://localhost:44319/adminservice", cForm,
      { headers: Headers, responseType: 'text' }).subscribe(
        (result) => {
          console.log(result)
          console.log("ADDED COURSE successfully")
          alert("Added technology successfully");
          this.dialogRef.close();
          this._router.navigateByUrl('adminDashboard', { skipLocationChange: true }).then(() => {
            this._router.navigate(['adminDashboard/technologyCRUD']);
        });
        },
        (error) => {
          console.log(error)
          alert("Error occured, check whether Backend is running!");
        }
      )
  }
}

