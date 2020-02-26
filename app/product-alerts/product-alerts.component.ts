import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { AlertService} from '../_services';


@Component({
  selector: 'app-product-alerts',
  templateUrl: 'product-alerts',
  styleUrls: ['product-alerts']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}