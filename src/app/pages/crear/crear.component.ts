import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
public error: string;
public newtag:string='';
public tags: string = '';
  public product: Product;
  constructor(public global: GlobalService, public route: Router) { 
    this.product= new Product('',0,0,[]);
    this.error= "";
  }

  ngOnInit(): void {
  }

  save(f: NgForm){
if(f.invalid) {
  this.error =" All data are requiered"; 
  return}
else
{
  debugger;
  this.global.data.push( new Product(this.product.name, this.product.price, this.product.stock, this.product.tags)) ;
this.route.navigate(['listar']);
    
  
}
  }
add(){
this.product.tags.push(this.newtag);
this.tags = this.product.tags.join(",")
}
  
}
