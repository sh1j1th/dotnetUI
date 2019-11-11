import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private _router: Router
  ) { }

  ngOnInit() {
  }
  login(userLogin) {
    console.log(userLogin);
    userLogin = JSON.stringify(userLogin);
    console.log(userLogin);

    let Headers = new HttpHeaders({ 'Content-Type': 'application/json' })

    this.http.post("https://localhost:44370/api/account/login", userLogin,
      { headers: Headers, responseType: 'text' }).subscribe(
        (result) => {
          console.log(result)
          localStorage.setItem('token', result);
        },
        (error) => {
          console.log(error)
          alert("Error occured, check whether Backend is running!");
        }
      )
  }
}
