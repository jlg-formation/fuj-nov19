import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: 'sell/list', component: ListComponent },
  { path: 'sell/detail', component: DetailComponent },
  { path: 'sell/success', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellRefRoutingModule {}
