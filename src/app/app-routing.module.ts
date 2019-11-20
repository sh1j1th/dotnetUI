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
import { ListCoursesComponent } from './components/mentor/list-courses/list-courses.component';
import { ListCoursesStudentComponent } from './components/student/list-courses-student/list-courses-student.component';
import { OngoingTrainingsMentorComponent } from './components/mentor/ongoing-trainings-mentor/ongoing-trainings-mentor.component';
import { MentorNotificationsComponent } from './components/mentor/mentor-notifications/mentor-notifications.component';
import { CompletedTrainingsMentorComponent } from './components/mentor/completed-trainings-mentor/completed-trainings-mentor.component';
import { OngoingCoursesStudentComponent } from './components/student/ongoing-courses-student/ongoing-courses-student.component';
import { CompletedCoursesStudentComponent } from './components/student/completed-courses-student/completed-courses-student.component';
import { StudentNotificationComponent } from './components/student/student-notification/student-notification.component';


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
      {path: 'allCourses', component: ListCoursesStudentComponent},
      {path: 'ongoingCourses', component: OngoingCoursesStudentComponent},
      {path: 'completedCourses', component: CompletedCoursesStudentComponent},
      {path: 'studentNotifications', component: StudentNotificationComponent}
      

    ]
  },
  { path: 'mentorDashboard', component: MentorDashboardComponent,
    children: [
      {path: 'allTechnologies', component: ListTechnologiesComponent},
      {path: 'dialogCreateCourse', component: DialogCreateCourseComponent},
      {path: 'myCourses', component: ListCoursesComponent},
      {path: 'ongoingTrainings', component: OngoingTrainingsMentorComponent},
      {path: 'mentorNotifications', component: MentorNotificationsComponent},
      {path: 'completedTrainings', component: CompletedTrainingsMentorComponent}

    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
