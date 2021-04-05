import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ls: LoginService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.login(form)
  }

  login(form: any){
    let data = form.value;
    this.ls.login(data.email, data.password).subscribe((response)=>{
      console.log(response)

    })
      // .then(response => response.json())
      // .then(res => {
      //   console.log(res)
      //   // this.router.navigate(['/']);
      //   })
  }


}
