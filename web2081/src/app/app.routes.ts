import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductsComponent } from './page/products/products.component';
import { AboutComponent } from './page/about/about.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { ClientComponent } from './layout/client/client.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ProductListComponent } from './page/admin/product-list/product-list.component';
import { ProductAddComponent } from './page/admin/product-add/product-add.component';
import { ProductEditComponent } from './page/admin/product-edit/product-edit.component';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';

export const routes: Routes = [
  {
    path: '', component: ClientComponent, children: [
      {path:'', component: HomeComponent}, // trang chủ
      {path:'product', component: ProductsComponent}, // sản phẩm
      {path:'about', component: AboutComponent}, // about
      {path:'product/:id', component: ProductDetailComponent},
      {path:'register',component: RegisterComponent},
      {path:'login',component: LoginComponent},
    ]
  },
  {
    path: 'admin', component: AdminComponent, children:[
      {path: 'product', component: ProductListComponent},
      {path: 'product/add', component: ProductAddComponent},
      {path: 'product/edit/:id', component: ProductEditComponent}
    ]
  },
  {path:'**', component: NotfoundComponent}
];
