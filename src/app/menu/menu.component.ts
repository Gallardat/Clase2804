import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  showFiller = false;

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  toggle() {
    this.sidenav.toggle();
  }

}
