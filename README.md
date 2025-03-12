"# WEB2081" 

# WEB2081

## Buổi 2:

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
 + ngFor
 + ngIf
 + ngSwitch
 + ngClass
 + ngStyle
 + ...


## Buổi 1:

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
 
