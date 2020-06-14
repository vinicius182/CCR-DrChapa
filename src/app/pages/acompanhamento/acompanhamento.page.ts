import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.page.html',
  styleUrls: ['./acompanhamento.page.scss'],
})
export class AcompanhamentoPage implements OnInit {
  information: any[];

  constructor(private http: HttpClient, private router: Router) { 
    this.http.get('assets/information.json').subscribe(res => {
      this.information = res['items'];

    });
  }

  ngOnInit() {
  }

  toggleSection(index) {
    this.information[index].open = !this.information[index].open;
  }

  goToViagem(viagemIniciada){
    this.router.navigate(['/tabs/viagem'], {queryParams:{iniciou:viagemIniciada}});
  }
}
