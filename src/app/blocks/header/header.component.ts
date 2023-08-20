import { Component } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease')
      ]),
      transition(':leave', [
        animate('0.5s ease', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HeaderComponent {
  isActive: boolean = false;
  accordionActive: boolean = false;
  accordionChildActive: boolean = false;
  faCaretDown = faCaretDown;
  faClose = faTimes;
  accordionIcon: any = this.faCaretDown;
  accordionChildIcon: any = this.faCaretDown;

  constructor() {}

  hamburgerClicked() {
    this.isActive = !this.isActive;
  }

  accordionClicked() {
    this.accordionActive = !this.accordionActive;
    if (window.innerWidth < 1200) {
      this.accordionIcon = this.accordionActive ? this.faClose : this.faCaretDown;
    }
  }

  accordionChildClicked() {
    this.accordionChildActive = !this.accordionChildActive;
    if (window.innerWidth < 1200) {
      this.accordionChildIcon = this.accordionChildActive ? this.faClose : this.faCaretDown;
    }
  }
}
