import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  createPost(profile:any,trainer:any,title:any,content:any) {
   
    return this.httpClient.post('https://peaceful-savannah-28414.herokuapp.com/' + 'post/',{profile:profile,trainer:trainer,title:title,content:content})
          
  }
  addComment(profile:any,trainer:any,post:any,body:any,parent:any) {
   
    return this.httpClient.post('https://peaceful-savannah-28414.herokuapp.com/' + 'post/comment',{profile:profile,trainer:trainer,post:post,body:body,parent:parent})
          
  }
}
