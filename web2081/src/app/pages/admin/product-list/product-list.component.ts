import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import IProduct from '../../../interface/product';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products!: IProduct[];

  constructor(
    private productServer: ProductService
  ){}

  ngOnInit(){
    this.productServer.getList().subscribe({
      next: (data) =>{
        // console.log(data);
        this.products = data
      },
      error: (err)=>{
        alert(err.message)
      }
    })
  }

  handleDelete(id: string){
    if(window.confirm("Bạn có chắc chắn muốn xóa không?")){
      this.productServer.delete(id).subscribe({
        next: ()=>{
            // alert("Xóa thành công")
            this.products = this.products.filter((item)=> item.id != id);// loại bỏ phần tử đã bị xóa
        },
        error: (err)=>{
          alert("Xóa thất bại: " + err.message)
        }
      })
    }
    
  }

}
