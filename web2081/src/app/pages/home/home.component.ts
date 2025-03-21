import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import IProduct from '../../interface/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  //B1: tạo file db.json copy data
  //B2: tạo script "server" trong package.json
  //B3: Tạo service: ng g s service/product
  //B4: add provide provideHttpClient vào app.config.ts
  //B5: Tạo service getList trong product service
  //B6: Gọi service getList tại home

  /**
   * Yêu cầu:
   * Hiển thị danh sách sản phẩm -> home page (card) -> tailwind
   * Tạo (thiết kế giao diện) trang chi tiết sản phẩm khi click vào tên sp
   */

  /**
   * b1: tạo component product-detail: ng g c pages/product-detail
   * b2: khai router product detail trong app.router.ts
   * b3: Nhận id trong product-detail trong contructor
   * b4: Tạo getById trong product service
   * b5: gọi getById trong ngOnInit của Product-detail
   * b6: Xây dựng giao diện trang chi tiết sản phẩm
   */

  products: IProduct[] = []

  constructor(private productService: ProductService){}

  ngOnInit(){
    // call api lấy danh sách sản phẩm
    this.productService.getList().subscribe({
      next: (data) => {
        // xử lý logic thành công
        // console.log(data);
        this.products = data;
      },
      error: (err)=>{
        // xử lý logic nếu thất bại
        console.log(err);
      },
      complete: () =>{
        // xử lý logic hoàn thành
        console.log("Done");
      }
    })
        
  }
}
