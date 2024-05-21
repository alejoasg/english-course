import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesComponent } from '../course/course.component';
import { CommonModule } from '@angular/common';
import { UserServiceService } from './../user-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, CoursesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit,OnDestroy {

  userName: string = ""
  isLoggedIn = false;
  favCourse = '';
  userDataSubscription: Subscription | undefined;
  private handlerDelay:boolean = false;

  constructor(private userService: UserServiceService) {}

  ngOnInit() {
    this.userDataSubscription =  this.userService.userData$.subscribe(userData => {
      this.userName = userData.name;
      if(this.handlerDelay && !this.isLoggedIn){
        this.isLoggedIn = true;
      }
    });
  }

  ngOnDestroy() {
    if (this.userDataSubscription) {
      this.userDataSubscription.unsubscribe();
    }
  }
  onClickLogin(){
    this.handlerDelay = true;
  }

  updateName( newName : string ){
    this.userService.setName( newName );
  }

  getFavorites(courseName: string){
    this.favCourse = courseName;
  }

  greet(){
    alert("hello " + this.userName );
  }
}
