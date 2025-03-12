import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products = [
    {
      id: 1,
      name: 'Laptop Dell XPS 15',
      price: 35000000,
      inStock: true,
      category: 'LT',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'iPhone 14 Pro Max',
      price: 29000000,
      inStock: false,
      category: 'MB',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Samsung Galaxy S23',
      price: 22000000,
      inStock: true,
      category: 'MB',
      rating: 4.6,
    },
    {
      id: 4,
      name: 'Tai nghe Sony WH-1000XM4',
      inStock: true,
      category: 'PK',
      rating: 4.7,
    },
    {
      id: 5,
      name: 'Bàn phím cơ Keychron K8',
      price: 2500000,
      inStock: false,
      category: 'PK',
      rating: 4.3,
    },
  ];

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
