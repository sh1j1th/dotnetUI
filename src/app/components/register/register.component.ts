import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( 
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private _router : Router
  ) { }
 
  ngOnInit() {
  }

  //register 
  register(userReg){
    console.log(userReg);
    userReg = JSON.stringify(userReg);
    console.log(userReg);

    let Headers = new HttpHeaders({ 'Content-Type': 'application/json'})

      this.http.post("https://localhost:44370/api/account/register", userReg,
        { headers: Headers, responseType: 'text' }).subscribe(
          (result) => {
            console.log(result)
            // alert("Please login to continue")
            // this._router.navigate(['/login'])
          },
          (error) => {
            console.log(error)
            alert("Error occured, check whether Backend is running!");
          }
        )
  }

}
