import { Component, OnDestroy, Inject,OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
 
import {Router} from "@angular/router"; 
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  public hideSpinner;
  public loginSuccessfullMessage;
  public emailValidationRegex ;
  public allowManageUsersSubAdmin = false;
  public allowManageFeedbackSubAdmin = false;
  public name;
  public profilePic;
  
  constructor(   private router: Router,@Inject(DOCUMENT) _document?: any) {
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    }); 
  }
  
  
  ngOnInit() {
    
   
  }
  
 
   
  
  
  
  
  ngOnDestroy(): void { 
  }
}
