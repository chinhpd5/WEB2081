import { Component, SimpleChanges,Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent {
  @Input() data!: string;
  child= "abc"

  handleChangeChild(){
    this.child ="new abc"
  }

  constructor(){
    console.log("Contructor called");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called ', changes);
  }
  ngOnInit() {
    console.log('ngOnInit called');
  }
  ngDoCheck() {
    console.log('ngDoCheck called');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
