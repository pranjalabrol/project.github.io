import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email!:string;
password!:string;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  handlePage() {
    if(this.email == "pranjal@sasken.com" && this.password == "Pranjal@"){
   this.router.navigate(['/', 'home']);
  }
  else{
    alert("Invalid Credentials")
  }


}
}
