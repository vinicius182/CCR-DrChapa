import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss'],
})
export class NavTabsComponent implements OnInit {
  @Input('title') title: any
  constructor(public navCtrl: NavController) { }

  ngOnInit() {}

  goToCupom(){
    this.navCtrl.navigateForward('/tabs/cupom')
  }
}
