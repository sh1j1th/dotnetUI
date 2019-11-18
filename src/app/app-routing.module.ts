import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminTechnologyComponent } from './components/admin/admin-technology/admin-technology.component';
import { AdminDialogCreateTechComponent } from './components/admin/admin-dialog-create-tech/admin-dialog-create-tech.component';
import { AdminStudentComponent } from './components/admin/admin-student/admin-student.component';
import { AdminMentorComponent } from './components/admin/admin-mentor/admin-mentor.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditTechDialogComponent } from './components/admin/edit-tech-dialog/edit-tech-dialog.component';
import { MentorDashboardComponent } from './components/mentor/mentor-dashboard/mentor-dashboard.component';
import { ListTechnologiesComponent } from './components/mentor/list-technologies/list-technologies.component';
import { DialogCreateCourseComponent } from './components/mentor/dialog-create-course/dialog-create-course.component';


const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'studentDashboard', component: StudentDashboardComponent },

  { path: 'adminDashboard', component: AdminDashboardComponent,
    children: [
      { path: 'technologyCRUD', component: AdminTechnologyComponent },

      { path: 'createTech', component: AdminDialogCreateTechComponent },
      { path: 'studentOps', component: AdminStudentComponent },
      { path: 'mentorOps', component: AdminMentorComponent },
      { path: 'editTech', component: EditTechDialogComponent }

    ]
  },
  { path: 'studentDashboard', component: StudentDashboardComponent,
    children: [

    ]
  },
  { path: 'mentorDashboard', component: MentorDashboardComponent,
    children: [
      {path: 'allTechnologies', component: ListTechnologiesComponent},
      {path: 'dialogCreateCourse', component: DialogCreateCourseComponent},

    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
