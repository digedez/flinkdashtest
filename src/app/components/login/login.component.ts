/*
Login pasos...

Repor en Gitlab del login
Integrar el código de login al proyecto
Test de login con Local storage
Conectar con Endpoint
*/


import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { AlertService, AuthenticationService } from '../_services/index';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {

  }


  /*
  public login() {
    alert("login");
    return true;
  }
  */

  estudiante = {
    nombre: 'Test Arias',
    pass: 'test'
  }

/*
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      if (localStorage.getItem('currentUser')) {
          // logged in so return true
          return true;
      }


      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
  }
*/

  enviarFormulario(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, formulario:NgForm){
    console.log(this.estudiante);
    //redirect
    //this.router.navigate(['/']);
    //$window.location.href = '/index.html';
     window.location.href='';
  }

  mostrarModel(){
    console.log(this.estudiante);
  }
}
/*
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
*/
