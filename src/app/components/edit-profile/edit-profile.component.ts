import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ApolloServiceService } from 'src/app/services/apollo-service.service';
import { AthleteService } from 'src/app/services/athlete.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  @Output() chooseProfile = new EventEmitter<string>();
  
  @ViewChild("img")
  img!: ElementRef<HTMLImageElement>;

  months:Array<string>=["January","February",'March','April','May',"June","July","August","September","October","November","December"]
  evenMonths:Array<string>=["January",'March','May',"July","September","November"]
  thisYear:number=0;
  yearInvalid:boolean=false;
  dayInvalid:boolean=false;
  myProfile:any={}
  constructor( private apolloService: ApolloServiceService,private athleteService:AthleteService) { }
  
  ngOnInit(): void {
    this.thisYear=new Date().getFullYear();
    // here we get my profile information
    // this.athleteService.getProfile('slug').subscribe((res)=>{
    //  console.log(res)
    // })
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

   fileUpload(images:any){
      let image=images.files[0];
      let url = URL.createObjectURL(image);
      this.img.nativeElement.src=url
       
   }  

   saveChanges(f:NgForm,img:any){
    // here we prepare data  and send it
    
    let data={...f.value,slug:'',id:1}
    let image=img.files[0] 

    // this.athleteService.editProfile(data).subscribe((res)=>{
    //    console.log(res)
    //  })

    this.chooseProfile.emit('my')

  } 
  
   selectMonth(select:HTMLSelectElement){
    select.style.color='#d83ea9'
   }
   
 

}
