import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './containers/ui/ui.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [UiComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [UiComponent]
})
export class UiModule { }
