import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared-service';
import { NavbarComponent } from '../../ni-components/navbar/navbar.component';

@Component({
  moduleId: module.id,
  selector: 'boxed-compress-layout',
  templateUrl: 'boxed-compress.component.html',
  styleUrls: ['boxed-compress.component.scss'],
  providers: [ SharedService ]
})
export class BoxedvisibleLayoutComponent implements OnInit {
  pageTitle: any;
  boxed: boolean;
  compress: boolean;
  @Input() openedSidebar: boolean;

  constructor( private _sharedService: SharedService ) {
    this.openedSidebar = false;
    this.boxed = true;
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