import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VouchersComponent } from './vouchers/vouchers.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'vouchers', component: VouchersComponent },
  { path: 'edit/:id', component: EditComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
