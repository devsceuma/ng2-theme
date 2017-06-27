import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared-service';
import { NavbarComponent } from '../../ni-components/navbar/navbar.component';

@Component({
  moduleId: module.id,
  selector: 'compress-sidebar-layout',
  templateUrl: 'compress-sidebar.component.html',
  styleUrls: ['compress-sidebar.component.scss'],
  providers: [ SharedService ]
})
export class CompresssidebarLayoutComponent implements OnInit {
  pageTitle: any;
  boxed: boolean;
  compress: boolean;
  @Input() openedSidebar: boolean;

  constructor( private _sharedService: SharedService ) {
    this.openedSidebar = false;
    this.boxed = false;
    this.compress = true;

    _sharedService.changeEmitted$.subscribe(
      title => {
        this.pageTitle = title;
      }
    );
  }

  ngOnInit() { }

  getClasses() {
    return {
      'boxed': this.boxed,
      'compress-sidebar': this.compress,
      'open-sidebar': this.openedSidebar
    };
  }

  sidebarState() {
    this.openedSidebar = !this.openedSidebar;
  }
}