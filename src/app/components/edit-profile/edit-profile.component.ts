import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ApolloServiceService } from 'src/app/services/apollo-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  @Output() chooseProfile = new EventEmitter<string>();

  months:Array<string>=["January","February",'March','April','May',"June","July","August","September","October","November","December"]
  evenMonths:Array<string>=["January",'March','May',"July","September","November"]
  thisYear:number=0;
  yearInvalid:boolean=false;
  dayInvalid:boolean=false;

  constructor( private apolloService: ApolloServiceService) { }
  ngOnInit(): void {
    this.thisYear=new Date().getFullYear();
  }
  toMy(){
    this.chooseProfile.emit('my')
  }

  changeYear(year:NgModel){
    this.yearInvalid=(year.value>this.thisYear)||(year.value<(this.thisYear-100));
  }
  changeDay(day:NgModel,selectmonth:NgModel){
    this.dayInvalid=this.evenMonths.includes(selectmonth.value)?(day.value>31||day.value<1):(day.value>30||day.value<1);
  }

   fileUpload(fileslist:any,img:HTMLImageElement){
         this.apolloService.fileUpload(fileslist)
         .subscribe( ({ data }) => {
         console.log( data.singleUpload.url)
         let url=  data.singleUpload.url
         img.src='../../../assets/'+url
    });   
   
   }  
   saveChanges(f:NgForm,img:HTMLInputElement){
    console.log(f)
    console.log(img.files)
    this.chooseProfile.emit('my')
  } 
  
   
   selectMonth(select:HTMLSelectElement){
    select.style.color='#d83ea9'
   }
   
 

}
