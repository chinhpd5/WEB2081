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
export class HomeComponent implements OnInit {

  // B1: tạo db.json và copy data
  // B2: tạo script server trong package.json
  // B3: tạo service: ng g s service/product --skip-tests
  // B4: Thêm provideHttpClient() trong app.config.ts
  // B5: tạo hàm getList trong product service
  // B6: gọi service getList trong home

  products: IProduct[] = []
  constructor(private productService: ProductService){}

  ngOnInit(){
    this.productService.getList().subscribe({
      next: (data) =>{ // xử lý nếu thành công
        // console.log(data);
        this.products = data
      },
      error: (err) =>{ // xử lý nếu thất bại
        console.log(err);
      },
      complete: ()=>{
        console.log("Done");
      }
    })        
  }
}

// BT:
/**
 * 1. Hiển thị danh sách sản phẩm trong home (card), tự thiết giao diện sử dụng tailwind
 * 2. khi click vào tên sp -> chi tiết sản phẩm
 * - lấy id trong trang chi tiết
 * - tạo service getById
 * - lấy thông tin chi tiết sản phẩm
 * 3. Thiết kế giao diện trang chi tiết sản phẩm (product-detail)
 */