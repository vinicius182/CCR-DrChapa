import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { AuthenticationService } from './services/authentication.service';

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed } from '@capacitor/core';


const { PushNotifications } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService,
    public navCtrl: NavController
  ) {
    this.initializeApp();
  }

  registerNotificationToken(messageToken) {
      var headers = new HttpHeaders({
        'Content-Type' : 'application/json; charset=utf-8',
      });

      headers = headers.append('notificationToken', messageToken);

      let requestOptions = {
        headers: headers
     }

      this.httpClient.post("http://192.168.0.22:8080/api/v1/notification/register", null, requestOptions)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });

    }



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authenticationService.authState.subscribe(state => {
        if (state)
        this.navCtrl.navigateForward('tabs/viagem');
        else
        this.navCtrl.navigateForward('login');
      })
    });


    PushNotifications.requestPermission().then( result => {
      if (result.granted) {
        PushNotifications.register();
      } 
    });

    PushNotifications.addListener('registration',
      (token: PushNotificationToken) => {
         this.registerNotificationToken(token.value);
        //enviar token para a API
      }
    );

    PushNotifications.addListener('registrationError',
      (error: any) => {
        alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        alert('Push received: ' + JSON.stringify(notification));
      }
    );

    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      }
    );
  }
}
