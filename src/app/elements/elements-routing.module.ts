import { RouterModule, Routes } from '@angular/router';

import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path:'', component: ElementsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
