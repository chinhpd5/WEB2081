import { Component } from '@angular/core';
import { HeaderComponent } from "./component/header/header.component";
import { UserComponent } from './component/user/user.component';
import { TodolistComponent } from "./component/todolist/todolist.component";
import { ProductComponent } from "./component/product/product.component";
import { LifecycleComponent } from "./component/lifecycle/lifecycle.component";

@Component({
  selector: 'app-root',
  imports: [TodolistComponent, ProductComponent, LifecycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isVisible = true
  handleDisplay(){
    this.isVisible = !this.isVisible;
  }

  myName= 'chinhpd5'
  myAge= 25
  products = [
    {
      id: 1,
      name: 'Laptop Dell XPS 15',
      price: 35000000,
      inStock: true,
      category: 'LT',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'iPhone 14 Pro Max',
      price: 29000000,
      inStock: false,
      category: 'MB',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Samsung Galaxy S23',
      price: 22000000,
      inStock: true,
      category: 'MB',
      rating: 4.6,
    },
    {
      id: 4,
      name: 'Tai nghe Sony WH-1000XM4',
      inStock: true,
      category: 'PK',
      rating: 4.7,
    },
    {
      id: 5,
      name: 'Bàn phím cơ Keychron K8',
      price: 2500000,
      inStock: false,
      category: 'PK',
      rating: 4.3,
    },
  ];

  receiveId(id: number){
    this.products = this.products.filter((item) => item.id != id)
  }


  data = {
    name: "chinhpd5",
    age: 20,
    gender: false,
    avatar: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
    description: "Yêu màu tím",
    linkFB: "https://google.com"
  }

  // phương thức
  renderGender(): string {
    return this.data.gender ? "Nam": "Nữ"
  }
}
