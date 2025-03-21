import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  //B1: tạo file db.json copy data
  //B2: tạo script "server" trong package.json
  //B3: Tạo service: ng g s service/product
  //B4: add provide provideHttpClient vào app.config.ts
  //B5: Tạo service getList
  //B6: Gọi service getList tại home

  constructor(private productService: ProductService){}

  ngOnInit(){
    // call api lấy danh sách sản phẩm
    this.productService.getList().subscribe({
      next: (data) => {
        // xử lý logic thành công
        console.log(data);
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
