import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  id: string | null = null
  productForm!: FormGroup // đại diện cho form

  constructor(
    private route: ActivatedRoute, // lấy id trên url
    private productService: ProductService, // quản lý các dịch của product
    private formBuilder: FormBuilder, // quản lý các thuộc tính trong FormGroup
    private router: Router // chuyển trang
  ){
    this.id = this.route.snapshot.params["id"];
    this.productForm =  this.formBuilder.group({
      "name": ['',[Validators.required,Validators.minLength(6)]],
      "price": [null,[Validators.required,Validators.min(100)]],
      "image":['',[Validators.required]],
      "status": [null,[Validators.required]],
      "category":['',[Validators.required]]
    })
  }

  ngOnInit(){
    if(this.id)
      // lấy dữ liệu chi tiết sản phẩm theo id
      this.productService.getById(this.id).subscribe({
        next: (data) =>{
          console.log(data);
          this.productForm.patchValue(data) // gán giá trị data vào form
        }
      })
  }

  handleSubmit(){
    // nếu form đang có lỗi  -> ngăn chặn cập nhập vào db
    if(this.productForm.invalid)
      return
    // console.log(this.productForm.value);
    // cập nhật data vào db
    this.productService.update(this.id!, this.productForm.value).subscribe({
      next: () =>{
        alert("Cập nhật thành công")
        this.router.navigate(['/admin/product']); // chuyển về trang danh sách sản phẩm
      },
      error: (err)=>{
        alert("Cập nhật thất bại: "+ err.message)
      }
    })

  }

}
