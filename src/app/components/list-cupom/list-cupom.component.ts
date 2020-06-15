import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-cupom',
  templateUrl: './list-cupom.component.html',
  styleUrls: ['./list-cupom.component.scss'],
})
export class ListCupomComponent implements OnInit {
  @Input('cupom') cupom: any;
  constructor() { }

  ngOnInit() {}

}
