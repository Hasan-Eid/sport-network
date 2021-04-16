
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { FriendshipService } from 'src/app/services/friendship.service';
import { TrainerService } from 'src/app/services/trainer.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  @ViewChild("follower")
  follower!: ElementRef<HTMLDivElement>;
  @ViewChild("unFollower")
  unFollower!: ElementRef<HTMLDivElement>;
  @ViewChild("showDiv")
  showDiv!: ElementRef<HTMLDivElement>;
  @ViewChild("buttonsDiv")
  buttonsDiv!: ElementRef<HTMLDivElement>;
  @Input() trainer: any={};
  @Output() chooseTrainer = new EventEmitter<string>();
  posts:any[]=[]
  photos:any[]=[]
  videos:any[]=[]
  workouts:any[]=[]

  constructor(private ts:TrainerService,private ps:PostService) { }

  ngOnInit(): void {
  }

  showPosts(){
    this.showDivFun(0)
    this.posts=this.ps.getTrainerPosts(this.trainer.slug)
    console.log(this.posts)
   }
  showPhotos(){
     this.showDivFun(1)
     this.photos=this.ps.getTrainerPhotos(this.trainer.slug)

   }
  showVideos(){
     this.showDivFun(2)
     this.videos=this.ps.getTrainerVideos(this.trainer.slug)

   }
  showWorkouts(){
     this.showDivFun(3)
     this.workouts=this.ps.getTrainerWorkouts(this.trainer.slug)
   }
  hideShowDiv(){
    this.showDiv.nativeElement.style.display='none'
    let children= this.buttonsDiv.nativeElement.children
    for(let i=0; i<children.length;i++)
    {
      (<HTMLElement>children[i]).style.display='initial'
      if(i==0){
        (<HTMLElement>children[i]).style.borderRadius='25px 0px 0px 25px'
      }
      else{
         if(i==3){
          (<HTMLElement>children[i]).style.borderRadius='0px 25px 25px 0px'
         }
         else{
          (<HTMLElement>children[i]).style.borderRadius='0px 0px 0px 0px'
         }
       }
    }
  }


  unFollow(slug:any){
   console.log('unfollow')
  //  this.ts.unFollow(slug).subscribe((res)=>{
  //   console.log(res)
  //  })
   this.trainer=this.ts.unFollow(slug)
   console.log(this.trainer)
   this.follower.nativeElement.style.display='none'
   this.unFollower.nativeElement.style.display='flex'
    
  }

  follow(slug:any){
  console.log('follow')
  // this.ts.follow(slug).subscribe((res)=>{
  //  console.log(res)
  // })
  this.trainer=this.ts.follow(slug)
  console.log(this.trainer)
  this.follower.nativeElement.style.display='flex'
  this.unFollower.nativeElement.style.display='none'

  }

  showDivFun(n:number){
    this.showDiv.nativeElement.style.display='initial'
    let children= this.buttonsDiv.nativeElement.children
    for(let i=0; i<children.length;i++)
    {
      if(i!=n)
      (<HTMLElement>children[i]).style.display='none'
      else{
        (<HTMLElement>children[i]).style.borderRadius='25px 0px 0px 25px'
      }

    }

  }
 
  back(){
    this.chooseTrainer.emit('trainers')
  }

}
