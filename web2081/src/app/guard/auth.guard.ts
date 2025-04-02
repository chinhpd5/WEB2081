import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const user = JSON.parse(localStorage.getItem('user')|| '{}')
  
  if(!user || user.id != 1){ // không phải quyền quản trị viên
    alert("Bạn không có quyền truy cập vào chức năng này");
    router.navigate(['/login'])
    return false;
  }
   
  return true;
};
