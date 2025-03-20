import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // ng g s service/product --skip-tests
  url='http://localhost:3000/products'
  constructor(private http: HttpClient) { }

  // service lấy danh sách sản phẩm
  getList(){
    return this.http.get(this.url)
  }
}
