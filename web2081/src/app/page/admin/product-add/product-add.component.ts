import { Component } from '@angular/core';
import { ProductAdd } from '../../../interface/product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  imports: [FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  product: ProductAdd = {
    name: '',
    price: null,
    image: '',
    category: '',
    status: null
  }

  constructor(private productService: ProductService, private router: Router){}

  handleSubmit(){
    // console.log(this.product);
    this.productService.add(this.product).subscribe({
      next: ()=>{
        alert("Thêm thành công")
        this.router.navigate(['admin/product'])
      },
      error: (err) =>{
        alert(err.message)
      }
    })
  }

}
