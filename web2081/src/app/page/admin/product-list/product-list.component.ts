import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import IProduct from '../../../interface/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: IProduct[] = []
  constructor(private productService: ProductService){}

  ngOnInit(){
    this.productService.getList().subscribe({
      next: (data) =>{
        // console.log(data);
        this.products = data;
      }
    })
  }

  handleDelete(id: string){
    // console.log(id);
    if(window.confirm("Bạn có chắc chắn muốn xóa không?")){
      this.productService.delete(id).subscribe({
        next: ()=>{
          // alert("Xóa thành công")
          this.products = this.products.filter((item)=>{
            return item.id != id
          })
        },
        error: (err) =>{
          alert("lỗi: "+ err.message)
        }
      })
    }
    
  }

}
