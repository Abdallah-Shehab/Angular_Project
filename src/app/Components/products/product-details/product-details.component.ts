import { Component, OnInit } from '@angular/core';
import { ProductServices } from './../../../Services/product-services.service';
import { IProducts } from '../../../Models/Iproducts';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent  implements OnInit  {

  productID:any ;
  myProduct?:IProducts ;
  constructor(public ProductServices:ProductServices,public activeRoute:ActivatedRoute,public router:Router) {
   
  }

  ngOnInit(): void {
    this.productID = this.activeRoute.snapshot.params['id'];
    this.myProduct=this.ProductServices.getProductByID(this.productID);
    console.log( this.activeRoute.snapshot);
  }

  DeleteProduct(id:any){
    this.ProductServices.Products=this.ProductServices.DeleteProduct(id);
    this.router.navigate(['/Products'])
  }

}
