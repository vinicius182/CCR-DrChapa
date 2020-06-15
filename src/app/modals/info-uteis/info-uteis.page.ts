import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info-uteis',
  templateUrl: './info-uteis.page.html',
  styleUrls: ['./info-uteis.page.scss'],
})
export class InfoUteisPage implements OnInit {
  concessionarias: any[];
  constructor(private modalController: ModalController, private http: HttpClient) { 
    this.http.get('assets/concessionaria.json').subscribe(res => {
      this.concessionarias = res['items'];
      console.log(this.concessionarias)
    });
  }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
