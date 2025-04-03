import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authForm!: FormGroup
  
    constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router
    ){
      this.authForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
        password: ['',[Validators.required, Validators.minLength(6)]]
      })
    }
  
    handleSubmit(){
      // console.log(this.authForm.valid);
      if(this.authForm.invalid){
        this.authForm.markAllAsTouched();// đánh dấu chạm cho tất cả các input
        return;
      }
      // console.log(this.authForm.value);
      this.authService.login(this.authForm.value).subscribe({
        next: (data: any) =>{
          console.log(data);
          localStorage.setItem('user',JSON.stringify(data.user))
          localStorage.setItem('token', data.accessToken)
          alert("Đăng nhập thành công")
          this.router.navigate(['/'])
        },
        error: (err) =>{
          alert(err.error)
        }
      })
      
     
    }

}
