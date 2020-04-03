import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from "@angular/router";
import { LocalStorageService } from 'src/app/service/storage/localStorage';
import { HttpServiceProvider } from 'src/app/service/httpService/httpService';
 
// import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent  {
 cartArray:any[]=[]
  constructor(  private router: Router, ) {
    let arr=window.localStorage.getItem('cartData')
    this.cartArray=JSON.parse(arr);
    console.log('cartArraycartArray',this.cartArray)
  }

  goToViewPArticularItem(a){
window.localStorage.setItem('singleItem',JSON.stringify(a));
this.router.navigate(['/view-item',a.id]) 
  }
  removeItem(i){
this.cartArray.splice(i,1);
window.localStorage.setItem('cartData',JSON.stringify(this.cartArray));
  }

  
}
