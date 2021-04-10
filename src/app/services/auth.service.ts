import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  
  login(email: any, password: any) {
   
    return this.httpClient.post('https://peaceful-savannah-28414.herokuapp.com/' + 'auth/login/',{email: email,password: password})
          
  }
  signUp(username:any,email: any, password: any) {
   
    return this.httpClient.post('https://peaceful-savannah-28414.herokuapp.com/' + 'auth/register/',{username:username,email: email,password: password})
          
  }
  logout(refresh:any){
    return this.httpClient.post('https://peaceful-savannah-28414.herokuapp.com/' + 'auth/logout/',{refresh:refresh})
  }
  

}
