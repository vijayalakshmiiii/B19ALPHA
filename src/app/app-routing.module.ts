import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';

const routes: Routes = [
  { path: '', component: MyOrdersComponent },
  { path: 'my-orders', component: MyOrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
