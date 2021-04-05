import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApolloServiceService } from 'src/app/services/apollo-service.service';
import {  faUserEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  @Output() chooseProfile = new EventEmitter<string>();


  myProfile:any=[];
  editProfile=faUserEdit

  i='sports.jpg'
  constructor(private as:ApolloServiceService) { }

  ngOnInit(): void {    
    // this.as.getMyProfile('1').valueChanges.subscribe(({data})=>{
    //    console.log(data)
    //   this.myProfile=data.myProfile
    //   console.log(this.myProfile)
    // })
  }
  posts(){

  }
  photos(){

  }
  videos(){

  }
  workouts(){

  }
  toMyProfile(){
    this.chooseProfile.emit('edit')
  }

}
