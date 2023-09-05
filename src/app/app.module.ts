import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './blocks/header/header.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { BannerComponent } from './blocks/banner/banner.component';
import { TabsSectionComponent } from './blocks/tabs-section/tabs-section.component';
import { FooterComponent } from './blocks/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BannerComponent, TabsSectionComponent, FooterComponent],
  imports: [BrowserModule, FontAwesomeModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
