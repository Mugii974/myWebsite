import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) =>
      typeof value === 'function' ? value.name : value;
    // Affiche le root sous la forme d'un tableau JSON, selon comment Angular le comprend
    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}