import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) age!: number;
  @Input({required: true}) products: any; // lấy từ app

  @Output() deleteId= new EventEmitter();

  renderStatus(state: boolean){
    return state ? "Còn hàng" : "Hết hàng"
  }

  handleDelete(id: number){
    // console.log(id);
    this.deleteId.emit(id) // truyền qua parent
  }

  
  /**
   * Tạo component 'product'
   * Hiển thị danh sách sản phẩm dạng table (STT, Tên sản phẩm, Giá bán, Trạng thái, Danh mục, Đánh giá), Yêu cầu:
   * Sử dụng ngFor để duyệt mảng sản phẩm
   * Giá bán: Sử dụng ngIf để kiểm tra (nếu không có giá bán thì hiển thị "Giá bán không khả dụng")
   * Trạng thái: Tạo phương thức renderSatus hiển thị tên trạng thái (Còn hàng/ Hết hàng)
   * Trạng thái: Sử dụng ngClass thể điều chỉ màu chữ theo trạng thái
   * Danh mục: Sử dụng ngSwitch để hiển thị tên Danh mục (LT: Laptop, MB: Điện thoại, PK: Phụ kiện)
   */
}
