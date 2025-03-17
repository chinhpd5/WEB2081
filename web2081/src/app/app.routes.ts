import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'product', component: ProductsComponent
  },
  {
    path: 'about', component: AboutComponent
  }
];
