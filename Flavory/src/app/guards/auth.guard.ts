import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  console.log(auth.getLoginStatus());
  if (auth.getLoginStatus()) {
    return auth.getLoginStatus();
  }
  router.navigateByUrl('/login');
  return auth.getLoginStatus();
};
