import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { FretePage } from '../frete/frete.page';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.page.html',
  styleUrls: ['./viagem.page.scss'],
})
export class ViagemPage implements OnInit {
  constructor(public alertController: AlertController, public navCtrl: NavController) { }

  ngOnInit() {
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
