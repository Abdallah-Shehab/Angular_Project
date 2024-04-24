import { Routes } from '@angular/router';
import { SliderComponent } from './Components/slider/slider.component';
import { ProductsComponent } from './Components/products/products.component';
import { StudentsComponent } from './Components/students/students.component';
import { ProductDetailsComponent } from './Components/products/product-details/product-details.component';
import { ProductFormComponent } from './Components/products/product-form/product-form.component';

export const routes: Routes = [
    {path:'',component:SliderComponent},
    {path:'Products',component:ProductsComponent},
    {path:'Students',component:StudentsComponent},
    {path:'Products/:id',component:ProductDetailsComponent},
    {path:'Products',children:[
        // {path:'Add',component:ProductFormComponent},
        {path:'edit/:id',component:ProductFormComponent}
    ]},
    
   

];
