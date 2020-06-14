import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authState = new BehaviorSubject(false);

  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController,
    public httpClient: HttpClient
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    })
   }

   ifLoggedIn() {
     this.storage.get('USER_INFO').then((response) => {
       if (response)
        this.authState.next(true);
     })
   }

   login() {
    var headers = new HttpHeaders({
      'Content-Type' : 'application/json; charset=utf-8',
        'Accept': 'application/json, text/plain',
        "cache-control": "no-cache", 
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers",
        "Access-Control-Allow-Credentials" : "true",
        "Access-Control-Allow-Methods" : "GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT",  
    });

     var loginForm = {
      username: '44992687883',
      password: '123'
     };

     let requestOptions = {
      headers: headers
   }

     this.httpClient.post('http://192.168.0.22:8080/api/v1/auth', loginForm, requestOptions)
     .subscribe(data => {
       console.log(data)
       this.storage.set('USER_INFO', data).then((reponse) => {
         this.router.navigate(['tabs/viagem']);
         this.authState.next(true);
       })
     })

    // DESCOMENTAR E COMENTAR AS COISAS DE CIMA CASO LOGIN NAO FUNCIONE 
    //  var dummy_response = {
    //   user_id: '007',
    //   user_name: 'test'
    //   };
    //   this.storage.set('USER_INFO', dummy_response).then((response) => {
    //     this.router.navigate(['dashboard']);
    //     this.authState.next(true);
    //   });
   }

   logout() {
     this.storage.remove('USER_INFO').then(() => {
       this.router.navigate(['login']);
       this.authState.next(false);
     })
   }
   
   isAuthenticated() {
     return this.authState.value;
   }
}
