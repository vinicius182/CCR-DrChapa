import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-expandable-details',
  templateUrl: './expandable-details.component.html',
  styleUrls: ['./expandable-details.component.scss'],
})
export class ExpandableDetailsComponent implements OnInit {
  @Input('product') product: any;
  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {}

  async buyItem(product){
    let toast = await this.toastCtrl.create({
      message: `Adicionado ao carrinho: ${product.name}`
    })
    toast.present();
  }

}
