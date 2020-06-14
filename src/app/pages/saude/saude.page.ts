import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-saude',
  templateUrl: './saude.page.html',
  styleUrls: ['./saude.page.scss'],
})
export class SaudePage implements OnInit {
  information: any[];

  constructor(private http: HttpClient) { 
    this.http.get('assets/health.json').subscribe(res => {
      this.information = res['items'];
      console.log(this.information)
    });
  }

  ngOnInit() {
  }
  
  toggleSection(index) {
      this.information[index].open = !this.information[index].open;
    }
}
