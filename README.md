"# WEB2081" 

# WEB2081

## Buổi 4: Lifecycle và Router

### Angular Lifecycle Hooks
- contructor
  + Hàm khởi tạo
  + Chạy đầu tiên khi 1 class được khởi tạo

- ngOnChanges(changes: SimpleChanges)
  + Được gọi khi một hoặc nhiều @Input() properties thay đổi.
  + Sử dụng để theo dõi sự thay đổi của dữ liệu đầu vào từ component cha.
  + Ví dụ: 
  ```
    ngOnChanges(changes: SimpleChanges) {
      console.log('ngOnChanges called ', changes);
    }
  ```

- ngOnInit()
  + Được gọi một lần sau khi component khởi tạo xong.
  + Sử dụng để khởi tạo dữ liệu, gọi API hoặc thực hiện các tác vụ cần thiết ngay sau khi component được tạo.
  + Ví dụ:
  ```
    ngOnInit() {
      console.log('ngOnInit called');
    }
  ```

- ngDoCheck()
  + Được gọi sau mỗi lần Angular kiểm tra sự thay đổi (change detection cycle).
  + Sử dụng để theo dõi các thay đổi không được phát hiện bởi ngOnChanges.
  + Ví dụ:
  ```
    ngDoCheck() {
      console.log('ngDoCheck called');
    }
  ```

- ngAfterContentInit() *
  + Được gọi sau khi nội dung từ component cha được chèn vào (ng-content).
  + Ví dụ:
  ```
    ngAfterContentInit() {
      console.log('ngAfterContentInit called');
    }
  ```

- ngAfterContentChecked() *
  + Được gọi sau mỗi lần change detection của nội dung được chèn vào.
  + Ví dụ:
  ```
    ngAfterContentChecked() {
      console.log('ngAfterContentChecked called');
    }
  ```

- ngAfterViewInit() 
  + Được gọi sau khi view của component hoặc view của các component con được khởi tạo.
  + Sử dụng để thao tác với các phần tử trong template.
  + Ví dụ:
  ```
    ngAfterViewInit() {
      console.log('ngAfterViewInit called');
    }
  ```

- ngAfterViewChecked()
  + Được gọi sau mỗi lần angular kiểm tra nội dung của view được chèn vào.
  + Ví dụ:
  ```
    ngAfterContentChecked() {
      console.log('ngAfterViewChecked called');
    }
  ```

- ngOnDestroy()
  + Được gọi khi component bị hủy.
  + Sử dụng để dọn dẹp bộ nhớ, hủy subscriptions.
  + Ví dụ:
  ```
    ngOnDestroy() {
      console.log('ngOnDestroy called');
    }
  ```

### Router
- Angular Router là một module mạnh mẽ giúp điều hướng giữa các trang trong ứng dụng Angular
- Cài đặt (nếu chưa có): `ng add @angular/router`
- Nơi quản lý: `src/app/app.routes.ts`
- Thành phần của 1 route:
  + `path`: Chuỗi định nghĩa đường dẫn URL (ví dụ: `home`, `about`, `products/:id`).
  + `component`: Nội dung Component hiển thị tương ứng khi truy cập đường dẫn.
  + `children`: Định nghĩa các tuyến đường con (nested routes).
  + `redirectTo`: Chuyển hướng URL từ đường dẫn này sang đường dẫn khác.
  + `pathMatch`: Kiểu khớp đường dẫn, thường là 'full' hoặc 'prefix'.
  + `canActivate`: Bảo vệ tuyến đường, chỉ cho phép truy cập nếu điều kiện được thỏa mãn.
  + `canActivateChild`: Bảo vệ các tuyến đường con.
  + `canDeactivate`: Xác nhận trước khi rời khỏi một tuyến đường.
  + `canLoad`: Kiểm tra trước khi tải một mô-đun (lazy loading).
  + `data`: Chứa dữ liệu tùy chỉnh có thể truy cập trong ActivatedRoute.
  + `resolve`: Tiền xử lý dữ liệu trước khi tải trang.
  + `runGuardsAndResolvers`: Xác định cách bảo vệ và bộ phân giải hoạt động lại khi URL thay đổi.

- Cách chuyển hướng, 
  + HTML Sử dụng `routerLink`, ví dụ: `<a routerLink="/">Home</a>` hoặc `<button routerLink="/about">Go to About</button>`
  + TS sử dụng `Router`, ví dụ: 
  ```
    constructor(private router: Router) {}
    goToHome() {
      this.router.navigate(['/home']);
    }
  ```
## Buổi 3: Two way binding, Input và Ouput

### Two way binding
- Two-way binding trong Angular là một kỹ thuật giúp đồng bộ hóa dữ liệu giữa model (dữ liệu trong component) và view (giao diện hiển thị). Điều này có nghĩa là khi dữ liệu thay đổi trong component, giao diện cũng thay đổi theo, và ngược lại khi người dùng cập nhật giá trị trên giao diện, dữ liệu trong component cũng được cập nhật.
- Ví dụ:
  + TS: 
  ```
    import { Component } from '@angular/core';
    import {FormsModule} from '@angular/forms'
    @Component({
      selector: 'app-todolist',
      imports: [FormsModule],
      templateUrl: './todolist.component.html',
      styleUrl: './todolist.component.css'
    })
    export class TodolistComponent {
      name= ''
    }
  ```
  + HTML:
  ```
    <input type="text" [(ngModel)]="name">
  ```

### Input và Output
- Trong Angular, @Input() và @Output() là hai decorator quan trọng giúp trao đổi dữ liệu giữa các component cha và component con.
- @Input(): Cho phép truyền dữ liệu từ component cha vào component con.
- @Output(): Cho phép component con gửi sự kiện hoặc dữ liệu ngược lên component cha.
- Cách sử dụng:
+ Ví dụ @Input:
  ```
    // Component Con
    import { Component, Input } from '@angular/core';
    @Component({
      selector: 'app-child',
      template: `<p>Giá trị nhận được: {{ data }}</p>`
    })
    export class ChildComponent {
      @Input() data: string = '';
    }
  ```

  ```
    // Component Cha
    import { Component } from '@angular/core';
    @Component({
      selector: 'app-root',
      template: `<app-child [data]="parentData"></app-child>`
    })
    export class AppComponent {
      parentData = 'value';
    }
  ```
+ Ví dụ @Output:
  ```
    // Component Con
    import { Component, Output, EventEmitter } from '@angular/core';
    @Component({
      selector: 'app-child',
      template: `<button (click)="sendData()">Gửi dữ liệu</button>`
    })
    export class ChildComponent {
      @Output() dataEvent = new EventEmitter<string>();
      sendData() {
        this.dataEvent.emit('Dữ liệu từ Component Con!');
      }
    }
  ```

  ```
    // Component Cha
    import { Component } from '@angular/core';
    @Component({
      selector: 'app-root',
      template: `
        <app-child (dataEvent)="receiveData($event)"></app-child>
      `
    })
    export class AppComponent {
      receiveData(data: string) {
        console.log(data)
      }
    }
  ```

## Buổi 2: Component và Directive

### Cách tạo 1 component
- Cách 1: Tạo thủ công

- Cách 2: Sử dụng CLI
+ `ng generate component {ten-component}`
+ `ng g c {ten-component}`

- Các option cần có trong 1 Component
  + selector
  + template / templateUrl
  + styles / styleUrl / styleUrls

- Các directive(chỉ thị) cơ bản thường dùng
  (* để sử dụng các chỉ thị cần import `CommonModule` tại Component)
 + ngFor
 + ngIf
 + ngSwitch
 + ngClass
 + ngStyle
 + ...


## Buổi 1: Cài đặt dự án và binding cơ bản

### Chuẩn bị
- Docs Angular: https://angular.dev/
- Cài đặt NodeJS (Phiên bản 18.19.1 trở lên): https://nodejs.org/en/download
- Cài đặt Angular CLI: `npm i -g @angular/cli`
- Kiểm tra: `ng v` hoặc `ng version`

### Cài đặt dự án Angular
#### Cách 1
- `npm create vite@latest`
- Nhập tên project `web2081`
- Chọn framework: `angular`
- next ...

#### Cách 2
- `ng new {project-name}`, ví dụ: `ng new web2081`
- stylesheet: Chọn `CSS`
- enable Server-Side Rendering (SSR) and Static Site Generation: `N`
- Di chuyển vào project: `cd {project-name}`
- Mở VSC: `code .`
- `npm start` 

### Cài đặt extension VSC:
- Angular Language Service
- Tailwind CSS IntelliSense

### Properti Binding
```
  data = {
    name: "chinhpd5",
    age: 20,
    gender: true,
    avatar: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
    description: "Yêu màu tím",
    linkFB: "https://google.com"
  }
```

### Cài đặt tailwind: 
- Docs: https://tailwindcss.com/
- Hướng dẫn cài đặt: https://tailwindcss.com/docs/installation/framework-guides/angular
- `npm install tailwindcss @tailwindcss/postcss postcss --force`
- Tạo file `.postcssrc.json` và thêm nội dung:
```
  {
    "plugins": {
      "@tailwindcss/postcss": {}
    }
  }
```
- Thêm `@import "tailwindcss";` vào file `./src/styles.css`

### Nội dung cần tìm hiểu tailwind:
- Màu sắc: `text-red-500`, `bg-blue-300`, `border-gray-700`, `bg-[#ff5733]`
  + text: chữ
  + bg: background
  + border: viền
- Khoảng cách (margin/padding): `m-4`, `p-6`, `px-3`, `py-2`
  + m: margin, p: padding
  + l: left, t: top: r: right, b: botton. Ví dụ: mt: `margin-top`
  + x: trục ngang, y: trục dọc
  + 1,2,3,4,... : space. Công thức = space*0.25 rem, Ví dụ 8 -> 8 x 0.25 = 2 rem (1 rem = 16px) -> 32px
  + Ví dụ: mr-4: `margin-right: 16px` 
- Flexbox và Grid: `flex`, `grid`, `justify-center`, `items-start`
- Typography: `text-lg`, `font-bold`, `leading-relaxed`
- Kích thước: `w-1/2`, `h-64`, `max-w-md`, `w-full`, `h-screen`
- Hiệu ứng (`hover`, `focus`, `responsive`, `dark mode`, `animation`)
  + resposive: (sm: (≥ 640px) ,md: (≥ 768px), lg: (≥ 1024px), xl: (≥ 1280px), 2xl: (≥ 1536px))
  ```
    <div class="text-sm md:text-lg lg:text-xl xl:text-2xl">
      Văn bản sẽ thay đổi kích thước theo màn hình.
    </div>
  ```
  + darkmode: 
  ```
    <div class="bg-white dark:bg-gray-900 text-black dark:text-white">
      Chế độ sáng và tối
    </div>
  ```
  + 
  ``` Pseudo-classes
    <button class="bg-blue-500 hover:bg-blue-700 focus:ring focus:ring-blue-300">
      Nút
    </button>
  ```
 
