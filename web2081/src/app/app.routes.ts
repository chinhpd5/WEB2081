import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ClientComponent } from './layout/client/client.component';

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
      }
    ]
  },
  {
    path: "**", component: NotfoundComponent
  }
];
