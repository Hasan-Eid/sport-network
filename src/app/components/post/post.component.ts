import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: any;
  @ViewChild('viewMoreDiv')
  viewMoreDiv!: ElementRef<any>; 
  liked:boolean=false
  showImages:boolean=false
  shared:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  showComment(postId:any){
    console.log(postId)
 }  

commentInput(textarea:HTMLTextAreaElement){
    textarea.style.height='44px'
    textarea.style.height = textarea.scrollHeight + 'px'
        
  }
  toggled: boolean = false;
  handleSelection(event:any,textarea:HTMLTextAreaElement) {
    textarea.value+=event.char
    console.log(event.char);
  }
  
  addComment(e:any,textarea:HTMLTextAreaElement){
  
    if(e.keyCode === 13){
      console.log(textarea.value.trim())
      textarea.value=''
      textarea.style.height='44px'
    }
  }

  like(lk:HTMLElement){
    if(this.liked==true)
     { 
       this.post.likes--
       this.liked=false
       lk.style.color='white'
     }
     else{
      this.post.likes++
      this.liked=true
      lk.style.color='chartreuse'
     }
    console.log(this.post.likes)
  }

  share(sh:HTMLElement){
    if(this.shared==true)
    { 
      this.post.shares--
      this.shared=false
      sh.style.color='white'
    }
    else{
     this.post.shares++
     this.shared=true
     sh.style.color='chartreuse'
    }   
     console.log(this.post.shares)

  }

  viewMore(p:HTMLParagraphElement,viewMore:HTMLElement){
    if(viewMore.textContent=='.. viewLess ..')
    {
      p.style.display='-webkit-box';
      console.log('less');
      viewMore.textContent='.. viewMore ..'
    }
    else
    {
      console.log('more');
      p.style.display='flex';
      viewMore.textContent='.. viewLess ..'
    }
  }


  back(secondSectionOfPost:HTMLSpanElement,viewMoreDiv:HTMLDivElement,p:HTMLParagraphElement){
    this.showImages=false
    secondSectionOfPost.style.display='initial'
     if(viewMoreDiv&&(p.textContent!='')){
      viewMoreDiv.style.display='block'
     }
  
  }
  

  contentHeight(p:HTMLParagraphElement){
    console.log(Math.ceil((p.scrollHeight/24))>7)
    return (Math.ceil((p.scrollHeight/24))>7)
  }
  goTocarousel(secondSectionOfPost:HTMLSpanElement,viewMoreDiv:HTMLDivElement){
    this.showImages=true;
    secondSectionOfPost.style.display='none'
     if(viewMoreDiv){
      viewMoreDiv.style.display='none'
     }
  
  }

}
