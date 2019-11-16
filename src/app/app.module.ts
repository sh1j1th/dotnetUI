import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChildren } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatNativeDateModule,
  MatSelectModule,
  MatListModule,
  MatDialogModule,
  MatTableModule
} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminTechnologyComponent } from './components/admin-technology/admin-technology.component';
import { AdminStudentComponent } from './components/admin-student/admin-student.component';
import { AdminMentorComponent } from './components/admin-mentor/admin-mentor.component';
import { AdminDialogCreateTechComponent } from './components/admin-dialog-create-tech/admin-dialog-create-tech.component';
import { EditTechDialogComponent } from './components/edit-tech-dialog/edit-tech-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    StudentDashboardComponent,
    AdminDashboardComponent,
    AdminTechnologyComponent,
    AdminStudentComponent,
    AdminMentorComponent,
    AdminDialogCreateTechComponent,
    EditTechDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditTechDialogComponent]
})
export class AppModule { }
