import { Component, Input, OnInit } from '@angular/core';
import { ProductServices } from './../../../Services/product-services.service';
import { IProducts } from '../../../Models/Iproducts';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent{
 
  @Input() myProduct:any={};
   
 
}
