import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expandable-health',
  templateUrl: './expandable-health.component.html',
  styleUrls: ['./expandable-health.component.scss'],
})
export class ExpandableHealthComponent implements OnInit {
  @Input('item') item: any;
  constructor() { }

  ngOnInit() {
  }

}
