import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.page.html',
  styleUrls: ['./cupons.page.scss'],
})
export class CuponsPage implements OnInit {
  cupom: any[];
  constructor(private http: HttpClient) {
    this.http.get('assets/cupom.json').subscribe(res => {
      this.cupom = res['items'];
    });
   }

  ngOnInit() {
  }

}
