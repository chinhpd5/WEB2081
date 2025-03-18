import { Component,Input,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent {
  @Input() name!:string;
  title= "life cycle"

  handleChangeTitle(){
    this.title = "new life cycle"
  }

  constructor(){
    console.log("contructor called");
  }

  // khi @Input có sự thay đổi
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called ', changes);
  }

  // chạy 1 lần duy nhất sau khi component khởi tạo
  // dùng để khởi tạo dữ liệu, gọi api
  ngOnInit() {
    console.log('ngOnInit called');
  }

  // chạy mỗi lần có sự thay đổi trong component
  ngDoCheck() {
    console.log('ngDoCheck called');
  }
  

}
