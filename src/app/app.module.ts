import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotPepperComponent } from './component/hot-pepper/hot-pepper.component';
import { GurunabiComponent } from './component/gurunabi/gurunabi.component';

@NgModule({
  declarations: [
    AppComponent,
    HotPepperComponent,
    GurunabiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
