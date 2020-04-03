import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './views/cart.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
  
import { ViewItemComponent } from './views/view-item/view-item.component';  
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';

 

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cart',
    pathMatch: 'full',
  },
  
  
  {
    path: 'cart',
    component: CartComponent,
    data: {
      title: 'Cart Page'
    }
  },
 
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
       
     {
   
    path: "view-item/:itemId",
    component: ViewItemComponent,
     
 }, 
   
 
     
       
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
