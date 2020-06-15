import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expandable-details',
  templateUrl: './expandable-details.component.html',
  styleUrls: ['./expandable-details.component.scss'],
})
export class ExpandableDetailsComponent implements OnInit {
  @Input('product') product: any;
  constructor() { }

  ngOnInit() {
  }

}
