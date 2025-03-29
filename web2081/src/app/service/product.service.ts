import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import IProduct, { ProductAdd } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // ng g s service/product --skip-tests
  url='http://localhost:3000/products'
  constructor(private http: HttpClient) { }

  // service lấy danh sách sản phẩm
  getList(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.url)
  }

  getById(id: string){
    return this.http.get<IProduct>(`${this.url}/${id}`)
  }

  add(data: ProductAdd){
    return this.http.post(this.url,data)
  }

  delete(id: string){
    return this.http.delete(`${this.url}/${id}`)
  }

  update(id: string,data: any){
    return this.http.put(`${this.url}/${id}`,data)
  }
}
