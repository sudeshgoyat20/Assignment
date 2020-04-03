import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
  
} from '@coreui/angular';
import { AppComponent } from './app.component';
import { CartComponent } from './views/cart.component'; 
import { LocalStorageService } from './service/storage/localStorage';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpServiceProvider } from './service/httpService/httpService';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
 
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule,MatInputModule,MatDatepickerModule, MatSidenavModule ,
  MatToolbarModule,MatIconModule,MatListModule,MatSelectModule,
   MatButtonModule, MatNativeDateModule,MatTableModule,MatPaginatorModule,MatSortModule
 } from '@angular/material';
 import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
 
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { NgSelectModule } from '@ng-select/ng-select'; 
import { AuthInterceptor } from './service/httpService/authInterceptor';
  
 
import { MustMatchDirective } from './directives/mustMatch.directive'; 
import { ViewItemComponent } from './views/view-item/view-item.component'; 
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
//import { SidebarComponent } from './views/sidebar/sidebar.component'; 
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';
import { RootHeadComponent } from './components/root-head/root-head.component';  
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { MaterialModule } from './material.module';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
const APP_CONTAINERS = [
  DefaultLayoutComponent
];


@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    CartComponent, 
    MustMatchDirective, 
    ViewItemComponent, 
    MenuHeaderComponent  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule ,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatDatepickerModule, 
   MatNativeDateModule,MaterialModule,
   MatSidenavModule ,
   MatToolbarModule,MatIconModule, MatButtonModule,MatListModule,MatSelectModule,
  
    PerfectScrollbarModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    CarouselModule ,
    OwlModule ,
    NgxSmartModalModule.forRoot(),NgSelectModule
  ],
  providers: 
  [
    LocalStorageService,DefaultLayoutComponent,
    HttpServiceProvider,
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
