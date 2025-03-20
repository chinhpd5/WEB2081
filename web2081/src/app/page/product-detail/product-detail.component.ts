import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  id: string|null = null

  constructor(private route: ActivatedRoute,private productService: ProductService){
    // console.log(this.route.snapshot.params["id"]);
    this.id = this.route.snapshot.params["id"]
  }

  ngOnInit(){
    if(this.id)
      this.productService.getById(this.id)
  }
}
