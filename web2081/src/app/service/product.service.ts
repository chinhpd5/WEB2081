import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IProduct, { ProductAdd } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url='http://localhost:3000/products'
  constructor(private http: HttpClient) { }

  getList():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.url)
  }

  getById(id: string){
    return this.http.get(`${this.url}/${id}`)
  }

  add(data: ProductAdd){
    return this.http.post(this.url,data)
  }

  delete(id: string){
    return this.http.delete(`${this.url}/${id}`)
  }

  update(id: string, data: ProductAdd){
    return this.http.put(`${this.url}/${id}`,data)
  }
}
