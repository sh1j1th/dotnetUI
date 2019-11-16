import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminTechnologyComponent } from './components/admin-technology/admin-technology.component';
import { AdminDialogCreateTechComponent } from './components/admin-dialog-create-tech/admin-dialog-create-tech.component';
import { AdminStudentComponent } from './components/admin-student/admin-student.component';
import { AdminMentorComponent } from './components/admin-mentor/admin-mentor.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditTechDialogComponent } from './components/edit-tech-dialog/edit-tech-dialog.component';


const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'studentDashboard', component: StudentDashboardComponent },
  {
    path: 'adminDashboard', component: AdminDashboardComponent,
    children: [
      { path: 'technologyCRUD', component: AdminTechnologyComponent },

      { path: 'createTech', component: AdminDialogCreateTechComponent },
      { path: 'studentOps', component: AdminStudentComponent },
      { path: 'mentorOps', component: AdminMentorComponent },
      { path: 'editTech', component: EditTechDialogComponent }

    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
