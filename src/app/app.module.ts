import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RandoNameComponent } from './rando-name/rando-name.component';
import { ThingOneComponent } from './thing-one/thing-one.component';
import { ThingTwoComponent } from './thing-two/thing-two.component';
import { ThingThreeComponent } from './thing-three/thing-three.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    RandoNameComponent,
    ThingOneComponent,
    ThingTwoComponent,
    ThingThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
