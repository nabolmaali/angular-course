import { MockBackend } from '@angular/http/testing';
import { RouterModule } from '@angular/router';
import { DataService } from "./services/DataService";
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SignupFormComponent } from './signup-form/signup-form.component';

import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';
import { fakeBackendProvider } from './helpers/fake-backend';

import {BaseRequestOptions} from '@angular/http';
import { AuthGuard } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    CourseFormComponent,
    ChangePasswordComponent,
    GithubFollowersComponent,
    PostComponentComponent,
    NotFoundComponent,
    ArchiveComponent,
    HomeComponent,
    AdminComponent,
    NoAccessComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      { 
        path: 'admin', 
      component: AdminComponent , 
      canActivate:[AuthGuard]
    },
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent },
      {path:'archive/:year/:month',component:ArchiveComponent},
      {path:'**',component:NotFoundComponent}
    ])
      
  ],
  providers: [
    OrderService,

    AuthService,
    AuthGuard,

    // For creating a mock back-end. You don't need these in a real app. 
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    CoursesService,
    PostService,
    // DataService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
