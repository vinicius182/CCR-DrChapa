import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login()
  }

  register(){
    this.navCtrl.navigateForward('register')
  }
}
