import { Component, OnInit } from '@angular/core';
 
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent   {
showDiv="";
applyCouponBtn=true
  singleItem:any={}
  originalPrice:any;
  addressForm = new FormGroup({
    id: new FormControl(0),
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    streetAddress: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    PostalCode: new FormControl('', [Validators.required]),
});
 constructor(  private router: Router,){

let item=  window.localStorage.getItem('singleItem');
this.singleItem=JSON.parse(item);
console.log('this.singleItem',this.singleItem);
this.originalPrice=this.singleItem.price;
 }

 increaseOrDecreaseItem(n,quantity){
   if(n==1){
    this.singleItem.quantity=quantity+1;
    this.singleItem.price= this.singleItem.quantity* this.originalPrice
   }else if(quantity!=1){
    this.singleItem.quantity=quantity-1;
    this.singleItem.price= this.singleItem.quantity* this.originalPrice
   }
console.log('here is',quantity)
 }
 showCuponField=false;
 CouponValue:any;
 applyCupon(){
   this.showCuponField=true
 }
 applyDiscount(){
   console.log('this.CouponValue',this.CouponValue)
   if(this.CouponValue=='50Discount'){
this.singleItem.price=this.singleItem.price*50/100;
this.showCuponField=false;
this.applyCouponBtn=false
alert('successfuly applied the coupon now the price is'+this.singleItem.price+' '+'INR' )
//window.localStorage.setItem('singleItem',JSON.stringify(this.singleItem));
   }else{
     alert('Please enter a valid Coupon')
   }

 }
 backandEdit(){
  this.showDiv=''
 }
 showAdressBar(){
   console.log('ff')
   this.showDiv= 'shippingAdress';
 }
 submit(){
  this.showDiv= 'checkoutPage';
  console.log(this.addressForm.value)
 }

 gotoFinalPage(val){
  this.showDiv=val;
 }

 goBacktoCart(){
  this.router.navigate(['/cart'])
 }
}
