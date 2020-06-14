import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { FretePage } from '../frete/frete.page';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed } from '@capacitor/core';

const { PushNotifications } = Plugins;

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.page.html',
  styleUrls: ['./viagem.page.scss'],
})
export class ViagemPage implements OnInit {
  viagemIniciada : any;
  token: any;
  information: any = {};

  constructor(public alertController: AlertController,
              public navCtrl: NavController, 
              private route: ActivatedRoute,
              private http: HttpClient) 
    { 
      this.route.queryParams
      .subscribe((data) => {
        this.viagemIniciada = data['iniciou']
      })
    }

  ngOnInit() {

    
    this.http.get('assets/information.json')
    .subscribe(res => {
      this.information = res['items'][0].children[0];
    });

    PushNotifications.requestPermission().then( result => {
      if (result.granted) {
        PushNotifications.register();
      } 
    });

    PushNotifications.addListener('registration',
      (token: PushNotificationToken) => {
       this.token= token.value;
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

  async alertCalculo() {
    const alert = await this.alertController.create({
      header: 'CALCULAR O FRETE',
      message: 'Deseja calcular uma estimativa de frete para a viagem?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Não')
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Sim')
            this.navCtrl.navigateForward('frete')
          }
        }
      ]
    });
 
    await alert.present();
  }

}
