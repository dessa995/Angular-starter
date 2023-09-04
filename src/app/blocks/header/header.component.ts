import { Component  } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {
  isActive: boolean = false;
  accordionActive: boolean = false;
  accordionChildActive: boolean = false;
  faCaretDown = faCaretDown;
  faClose = faTimes;
  accordionIcon: any = this.faCaretDown;
  accordionChildIcon: any = this.faCaretDown;

  // @ViewChild('accordionParent', { static: true }) accordionParent!: ElementRef;
  // @ViewChildren('parentList > li') listItems!: QueryList<ElementRef>;
  // @ViewChild('accordionChild', { static: true}) accordionChild!: ElementRef;

  constructor() {}

  // ngAfterViewInit() {
  //   console.log(this.listItems);
  //   console.log(this.accordionParent);
  //   console.log(this.accordionChild);
  // }

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

  // @HostListener('document:click', ['$event'])
  // clickOutsideAccordion(event: MouseEvent) {
  //   const clickedElement = event.target as HTMLElement;
  //   const accordionParent = this.accordionParent.nativeElement;
  //   const accordionChild = this.accordionChild.nativeElement;

  //   console.log(this.listItems);
    

  //   if (this.accordionActive && !accordionParent.contains(clickedElement) && clickedElement != accordionChild) {
  //     this.accordionActive = false;
  //     this.accordionIcon = this.faCaretDown;
  //   }

  //   if (this.accordionChildActive && !accordionChild.contains(clickedElement)) {
  //     this.accordionChildActive = false;
  //     this.accordionChildIcon = this.faCaretDown;
  //   }
  // }
}
