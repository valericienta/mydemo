import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  data : Product[]=[];
  constructor() {

    this.data.push(new Product('Mouse', 123.33, 0, ['Bluetooh','Longitech','Silver']));
    this.data.push(new Product('Keyboard', 123.33, 100, ['Bluetooh','Microsoft','English']));
    console.log(this.data)
   }

}
