import { Component } from '@angular/core';
import { ProductAdd } from '../../../interface/product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../service/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-add',
  imports: [FormsModule,CommonModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {

  product: ProductAdd ={
    name: '',
    price: null,
    category: '',
    image: '',
    status: null
  }

  constructor(private productService: ProductService,private router: Router){}

  handleSubmit(form: any){
    // console.log(this.product);
    // console.log(form.valid);
    // validate cho cả form
    if(form.invalid){
      // nếu form có lỗi thì return
      return
    }

    this.productService.add(this.product).subscribe({
      next: ()=>{
        alert("Thêm thành công")
        this.router.navigate(['/admin/product'])
      },
      error: (err)=>{
        alert(err)
      }
    })
  }

}
