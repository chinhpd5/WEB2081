import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ClientComponent } from './layout/client/client.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ProductListComponent } from './pages/admin/product-list/product-list.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';

export const routes: Routes = [
  {
    path: '', component: ClientComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'product', component: ProductsComponent
      },
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'product/:id', component :ProductDetailComponent
      }
    ]
  },
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: 'product', component: ProductListComponent},
      {path: 'product/add', component: ProductAddComponent},
      {path: 'product/edit/:id', component: ProductEditComponent}
    ]
  },
  {
    path: "**", component: NotfoundComponent
  }
];
