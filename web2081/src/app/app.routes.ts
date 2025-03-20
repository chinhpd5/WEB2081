import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductsComponent } from './page/products/products.component';
import { AboutComponent } from './page/about/about.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { ClientComponent } from './layout/client/client.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '', component: ClientComponent, children: [
      {path:'', component: HomeComponent}, // trang chủ
      {path:'product', component: ProductsComponent}, // sản phẩm
      {path:'about', component: AboutComponent}, // about
      {path:'product/:id', component: ProductDetailComponent}
    ]
  },
  {path:'**', component: NotfoundComponent}
];
