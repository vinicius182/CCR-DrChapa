import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { FretePage } from '../frete/frete.page';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.page.html',
  styleUrls: ['./viagem.page.scss'],
})
export class ViagemPage implements OnInit {
  viagemIniciada : any;
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
  }

  async alertCalculo() {
    const alert = await this.alertController.create({
      header: 'CALCULAR O FRETE',
      message: 'Deseja calcular uma estimativa de frete para a viagem?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            this.navCtrl.navigateForward('acompanhamento')
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.navCtrl.navigateForward('frete')
          }
        }
      ]
    });
 
    await alert.present();
  }
  async alertCancelar(){
    const alert = await this.alertController.create({
      header: 'PARAR DE ACOMPANHAR',
      message: 'Ao parar, não conseguirei enviar dicas para ajudar na sua saúde e bem estar.',
      buttons: [
        {
          text: 'VOLTAR',
          handler: () => {
            console.log('Não')
          }
        },
        {
          text: 'PARAR AGORA',
          handler: () => {
            console.log('Sim')
            this.viagemIniciada = false;
          }
        }
      ]
    });

    await alert.present();
  }

}
