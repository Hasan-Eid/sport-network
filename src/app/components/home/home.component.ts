import { Component, OnInit } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { timeout } from 'q';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stories=['r2.jpg','r3.jpg','r4.jpg','r5.jpg','user.png']
  posts=[
         {
           id:3,
          content:`post contentthis is post contentthis is post contentthis
          post contentthis is post contentthis is post contentthis
          post contentthis is post contentthis is post contentthis
          post contentthis is post contentthis is post contentthis
          post contentthis is post contentthis is post contentthis
          post contentthis is post contentthis is post contentthis
          post contentthis is post contentthis is post contentthis
          post contentthis is post contentthis is post contentthis
           is post content`,
          images:['../../../assets/sports.jpg','../../../assets/r2.jpg','../../../assets/r5.jpg',],
          likes:144,
          comments:{num:200,comments:[]},
          shares:15
          }
        ]
  constructor() { }

  ngOnInit(): void {
  }

  close(){
    let storyShowSection=<HTMLDivElement>document.getElementsByClassName('storyShowSection').item(0)
    storyShowSection.style.display='none'

  }
  showStory(imgStory:HTMLElement){
    // let storyShowSection=<HTMLDivElement>document.getElementsByClassName('storyShowSection').item(0)
    // storyShowSection.style.display='block'
    // console.log(imgStory)
    // if(imgStory instanceof HTMLImageElement)
    // {
    //    let time=0
    //   let img=<HTMLImageElement>document.createElement('img')
    //   let src=imgStory.src;
    //   let imgChild=<HTMLImageElement>storyShowSection.firstElementChild;
    //   imgChild.src=src
    //   imgChild.style.display='initial';
    //   let timeline=<HTMLElement>storyShowSection.children.item(2)
    //   console.log(timeline.style.width)
    //   setInterval(()=>{
    //     time++
    //     if(time==100)
    //     {
    //       storyShowSection.style.display='none'
    //     }
    //     else{
    //       timeline.style.width=(time/100)*80 +'%'

    //     }
    //   } ,100)
      
    // }

  }

  



}
