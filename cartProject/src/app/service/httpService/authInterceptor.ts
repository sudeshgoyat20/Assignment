import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpResponse
  } from "@angular/common/http";
  import { Observable } from "rxjs";
  import { Router } from '@angular/router';
  import { LocalStorageService } from '../storage/localStorage';
  import { tap } from "rxjs/operators";
import { Injectable } from '@angular/core';
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    userToken:any;
    constructor( 
      private localStorageService:LocalStorageService,
     private router: Router
        
         ) {
          this.userToken=  window.localStorage.getItem("userToken")|| ' ';
          console.log('here is the token on intercept',this.userToken)
       }

    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      this.userToken=  window.localStorage.getItem("userToken")||  this.localStorageService.userTokenLog;
     console.log(' this.userToken AuthInterceptorAuthInterceptor ', this.userToken)
      // let cloneReq = req.clone({
      //   params: req.params.set(
      //   //  "auth-token",
      //   "Authorization",
      //   "Bearer"+' '+this.userToken 
      //   )
      // });
     
     // req.headers.set("Authorization", "Bearer"+' '+this.userToken);

     req = req.clone({
      setHeaders: {
        "Authorization":
          "Bearer"+' '+ `${this.localStorageService.getUserToken()}`
       
      }
    });

      return next.handle(req)
      .pipe(tap((response: any) => {
        console.log('response on interceptor111',response)
      
      }, (err: any) => {
        console.log('errrr on interceptor',err)
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) { 
            console.log('inside if')
          window.localStorage.removeItem('userToken')
          window.localStorage.clear();
            this.localStorageService.setLoginMessage({status:0,message:'Please Login'});
         this.router.navigate(['login']);
     //   location.reload();
          }
        }
      }));
   


      
      

    // return next.handle(cloneReq);


    // return next.handle(cloneReq).pipe(tap((err: any) => {
    //     console.log('errrr on interceptor111',err)
    //     if (event instanceof HttpResponse) {
    //     }
    //   }, (err: any) => {
    //     console.log('errrr on interceptor',err)
    //     if (err instanceof HttpErrorResponse) {
    //       if (err.status === 401) { 
    //         console.log('inside if')
    //       window.localStorage.removeItem('userToken')
    //       window.localStorage.clear();
    //         this.localStorageService.setLoginMessage({status:0,message:'Please Login'});
    //      this.router.navigate(['login']);
    //     location.reload();
    //       }
    //     }
    //   }));


      }
  
   
  }