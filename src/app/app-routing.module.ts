import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandoNameComponent } from './rando-name/rando-name.component';
import { ThingOneComponent } from './thing-one/thing-one.component';
import { ThingTwoComponent } from './thing-two/thing-two.component';
import { ThingThreeComponent } from './thing-three/thing-three.component';

const routes: Routes = [
  { path: 'rando-name', component: RandoNameComponent  },
  { path: 'thing-one', component: ThingOneComponent },
  { path: 'thing-two', component: ThingTwoComponent },
  { path: 'thing-three', component: ThingThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
