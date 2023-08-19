import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  status: boolean = false;
  isDark: boolean = false;
  isInside: boolean = true;

  @ViewChild('bannerButtonRef', { static: true }) bannerButtonRef!: ElementRef;

  constructor() {}

  flashPopup() {
    var vm = this;
    vm.status = true;
    if (window.innerWidth > 760) {
      setTimeout(function () {
        vm.isDark = true;
      }, 1800);
    } else {
      vm.isDark = true;
    }
  }

  closePopup() {
    this.status = false;
    this.isDark = false;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const buttonElement = this.bannerButtonRef.nativeElement;

    if (this.status && !buttonElement.contains(clickedElement)) {
      this.closePopup();
    }
  }
}
