import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-frete',
  templateUrl: './frete.page.html',
  styleUrls: ['./frete.page.scss'],
})
export class FretePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  changePage() {
    this.navCtrl.navigateForward('acompanhamento')
  }

}
