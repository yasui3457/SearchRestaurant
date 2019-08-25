import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotPepperComponent} from './component/hot-pepper/hot-pepper.component';
import { GurunabiComponent} from './component/gurunabi/gurunabi.component';


const routes: Routes = [
  { path: '', redirectTo: '/hotpepper', pathMatch: 'full' },
  { path: 'hotpepper', component: HotPepperComponent },
  { path: 'gurunabi', component: GurunabiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
