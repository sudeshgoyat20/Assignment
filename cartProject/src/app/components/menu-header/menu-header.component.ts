import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {
userDetails={

}
  @Output() public sidenavToggle = new EventEmitter();
  @Input() receivedParentMessage: string;
  constructor(private router:Router,) {
    console.log('receivedParentMessage',this.receivedParentMessage)
   }
 
  ngOnInit() {
    
  }
 
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  onLogout(){
    
   // location.reload();

    //this.localStorageService.setLoginMessage({status:0,message:'Please Login'});
 
  }
}
