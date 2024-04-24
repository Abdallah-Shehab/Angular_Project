import { ProductServices } from './../../../Services/product-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from '../../../Models/Iproducts';
import { FormsModule } from '@angular/forms';
import { ProductList } from '../../../Models/ProductsList';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
  title:string='Edit Product'
  Productname:string='';
  price:string='';
  quantity:number=0;
  product:any;
  id:any;

 
  constructor(public activeRoute:ActivatedRoute ,public router:Router , public ProductServices:ProductServices) {
    
  }
  ngOnInit(): void {
  this.id=this.activeRoute.snapshot.params['id'];
  if(this.id!=0){
    this.product = this.ProductServices.getProductByID(this.id);
    this.Productname=this.product.name;
    this.price=this.product.price;
    this.quantity=Number(this.product.quantity);

  }
  }
  
  ProductHandler(){

    if(this.id==0){
      let NewProduct :IProducts={
        id:ProductList.length+1,
        name:this.Productname,
        price:this.price,
        quantity:this.quantity,
        img:'empty'
        


      }
     this.ProductServices.AddProduct(NewProduct);
     this.router.navigate(['/Products']);

    }else{
      this.product.name=this.Productname;
      this.product.price=this.price;
      this.product.quantity=Number(this.quantity);
      this.router.navigate(['/Products']);
    }
    
 
  
    
  }

 
  
}
