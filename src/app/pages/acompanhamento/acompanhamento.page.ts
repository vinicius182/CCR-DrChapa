import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.page.html',
  styleUrls: ['./acompanhamento.page.scss'],
})
export class AcompanhamentoPage implements OnInit {
  information: any[];

  constructor(private http: HttpClient) { 
    this.http.get('assets/information.json').subscribe(res => {
      this.information = res['items'];

      this.information[0].open = true;
    });
  }

  ngOnInit() {
  }

  toggleSection(index) {
    this.information[index].open = !this.information[index].open;
  }

  toggleItem(index, childIndex){
    this.information[index].children[childIndex].open = !this.information[index].children[childIndex].open;
  }

}
