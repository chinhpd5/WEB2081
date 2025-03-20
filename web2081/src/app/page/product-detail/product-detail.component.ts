import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IProduct from '../../interface/product';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  id: string | null = null
  product!: IProduct;

  constructor(private route: ActivatedRoute){
    // lấy id trên URL
    this.id = this.route.snapshot.params["id"]
    console.log(this.id);
  }

  ngOnInit(){
    // call api chi tiết sản phẩm
    
  }

}
