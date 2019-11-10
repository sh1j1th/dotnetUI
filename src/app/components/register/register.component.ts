import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  firstName: String;
  lastName: String;
  phone: Number;
  email: String;
  dateOfBirth: Date;
  password: String;

  constructor(
    private http: HttpClient
  ) { }
 
  ngOnInit() {
  }

  //register 
  register(userReg){
    console.log(userReg);
  }

}
