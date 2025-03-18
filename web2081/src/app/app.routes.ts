import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ProductsComponent } from './page/products/products.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { ClientComponent } from './layout/client/client.component';

export const routes: Routes = [
  {
    path: '', component: ClientComponent, children:[
      {
        path:'', component: HomeComponent
      },
      {
        path:'about', component: AboutComponent
      },
      {
        path:'product', component: ProductsComponent
      },
    ]
  },
  {
    path:"**",
    component: NotfoundComponent
  }
];
