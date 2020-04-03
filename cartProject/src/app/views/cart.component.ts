import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DefaultLayoutComponent} from '../containers/default-layout/default-layout.component';
import { LocalStorageService } from '../service/storage/localStorage';
import { HttpServiceProvider } from '../service/httpService/httpService';
import { LoginRequest } from '../model/loginRequest'; 
import { windowTime } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent  {
  objData={
    cartView:false
  }
  constructor(  private router: Router, ) {
  let val=  window.localStorage.getItem('isItemthere');
  if(val=='yes'){
    this.objData.cartView=true;
  }
  }

cartData=[
  {imageName:'assets/img/avatars/1.jpg',name:'abc',id:1,price:400,codeNo:'ddd333311',quantity:1},
  {imageName:'assets/img/avatars/1.jpg',name:'cc',id:2,price:333,codeNo:'ddd3wwe233311',quantity:1},
  {imageName:'assets/img/avatars/1.jpg',name:'vv',id:3,price:2222,codeNo:'ewewe23',quantity:1},
  {imageName:'assets/img/avatars/1.jpg',name:'dd',id:4,price:4112100,codeNo:'ff232',quantity:1},
  {imageName:'assets/img/avatars/1.jpg',name:'ss',id:5,price:555,codeNo:'3dd32d',quantity:1},
  {imageName:'assets/img/avatars/1.jpg',name:'www',id:6,price:4444,codeNo:'ggg444',quantity:1},
  {imageName:'assets/img/avatars/1.jpg',name:'ddd',id:7,price:3232343,codeNo:'dde2212',quantity:1},
  {imageName:'assets/img/avatars/1.jpg',name:'sdsq',id:8,price:232323,codeNo:'f23d2d3r3r2',quantity:1},
  {imageName:'assets/img/avatars/1.jpg',name:'sdsd',id:9,price:2323,codeNo:'f3f333dd',quantity:1},
];
cartArr:any[]=[]
addToCart(a){
 this.cartArr.push(a);
   window.localStorage.setItem('cartData',JSON.stringify(this.cartArr));
   window.localStorage.setItem('isItemthere','yes');
   this.objData.cartView=true;
   alert('item with code no'+' '+a.codeNo+' '+'is added to your cart')
   
}

viewCart(){
  console.log('aa')
  this.router.navigate(['/dashboard'])
} 

}
