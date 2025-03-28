import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-product-edit',
  imports: [],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  id: string | null = null

  constructor(
    private route: ActivatedRoute, // lấy id trên url
    private productService: ProductService, // quản lý các dịch của product
  ){
    this.id = this.route.snapshot.params["id"]
  }

  ngOnInit(){
    if(this.id)
      // lấy dữ liệu chi tiết sản phẩm theo id
      this.productService.getById(this.id).subscribe({
        next: (data) =>{
          console.log(data);
          
        }
      })
  }

}
