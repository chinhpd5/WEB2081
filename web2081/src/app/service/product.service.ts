import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url='http://localhost:3000/products'
  constructor(private http: HttpClient) { }

  getList(){
    return this.http.get(this.url)
  }
}
