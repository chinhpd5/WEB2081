import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import IProduct from '../../../interface/product';
import { ProductService } from '../../../service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: IProduct[] = []

  constructor(private productServer: ProductService){}

  ngOnInit(){
    this.productServer.getList().subscribe({
      next: (data) =>{
        // console.log(data);
        this.products = data;
      }
    })
  }
  handeDelete(id: string){
    if(window.confirm("Bạn có chắc chắn muốn xóa không?")){
      // xóa
      this.productServer.delete(id).subscribe({
        next:()=>{
          // console.log("Xóa thành công");
          this.products = this.products.filter((item)=>{
            return item.id != id
          })
        },
        error: () => {
          alert("xóa thất bại")
        }
      })
    }
  }
}
