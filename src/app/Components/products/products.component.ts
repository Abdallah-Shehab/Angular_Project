import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { last } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { IProducts } from '../../Models/Iproducts';
import { ProductList } from '../../Models/ProductsList';
import { ProductServices } from '../../Services/product-services.service';
import { RouterLink } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemComponent,CommonModule,FormsModule,RouterLink,ProductFormComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  Products:IProducts[]=[];
  /**
   *
   */
  constructor(public ProductService:ProductServices) {
  
  }
  ngOnInit(): void {
    this.Products=this.ProductService.AllProducts();
    console.log( this.Products);
    
  }


  //  products: {  name: string; price:string;quantity: number; img:string }[] = [
//   { name: 'Keyboard',price:'100',quantity:5,img:'./assets/images/Products/keyboardandmouse.png'},
//   { name: 'Mouse',price:'200',quantity:2,img:'./assets/images/Products/mouse2.png'},
//   { name: 'Laptop',price:'200',quantity:0,img:'./assets/images/Products/laptop2.png'},
//   { name: 'Camera',price:'300',quantity:1,img:'./assets/images/Products/Digital Camera.png'}];


}
