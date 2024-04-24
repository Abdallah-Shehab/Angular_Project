
import { Injectable } from '@angular/core';
import { IProducts } from '../Models/Iproducts';
import { ProductList } from '../Models/ProductsList';

@Injectable({
  providedIn: 'root'
})
export class ProductServices {
Products:IProducts[]=[];
  constructor() { 
    this.Products = ProductList;
  }

  AllProducts(): IProducts[] {
return this.Products;
  }

  getProductByID(id:number):undefined|IProducts{
    return this.Products.find(p => p.id == id);
  }

  AddProduct(product:IProducts){
    this.Products.push(product);
    return this.Products;
  }

  UpdateProduct(productId:number, product:IProducts){

  }

  DeleteProduct(productId:number){
    this.Products= this.Products.filter(p => p.id != productId);
    return this.Products;
  }

}
