import { SliderComponent } from './Components/slider/slider.component';
import { Component } from '@angular/core';

import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductsComponent } from './Components/products/products.component';
import { FooterComponent } from './Components/footer/footer.component';
import { StudentsComponent } from './Components/students/students.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,SliderComponent,ProductsComponent,FooterComponent,StudentsComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';
  PageTitle:string='';


  getPageTitle(e:any){
    this.PageTitle=e;
    console.log(this.PageTitle);
  }
}
