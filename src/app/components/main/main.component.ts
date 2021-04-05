import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ApolloServiceService } from 'src/app/services/apollo-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
   friendsDiv: any;
  persons:any=[]
  constructor( private as:ApolloServiceService) { }

  ngOnInit(): void { 
   let body=document.getElementsByTagName('body')[0];
   body.style.backgroundImage="url('../../../assets/sports.jpg')";
    body.style.backgroundAttachment="fixed";
    body.style.backgroundSize= 'cover';
    body.style.filter='drop-shadow(2px 2px 3px black)'


    this.as.getFriends().valueChanges.subscribe(({ data }) => {
       this.persons= data.friendship.friends
      console.log(this.persons)
      
    })
     this.friendsDiv = <HTMLDivElement>document.getElementById('friendsDiv');
     this.friendsDiv.style.display='none'
    document.onclick = (e)=>{
         if(this.friendsDiv.style.display!='none')
                 if(!(<HTMLElement>e.target).classList.contains('friendsHide') ){
                      // console.log((<HTMLElement>e.target).classList.contains('friendsHide'))
                      this.friendsDiv.style.display ='none';
                   }
       };
  }

  accept(slug:string){
   console.log(slug)
  }
  searchFun(search:NgModel,e:any){
    e.stopPropagation();
    console.log(this.friendsDiv );
    (this.friendsDiv.style.display =='none')?this.friendsDiv.style.display ='inline':{};
  }


}
