import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';



const adminRoutes: Routes = [
  { path: '', component: AdminDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
  declarations: [

  ],
})
export class AdminRoutingModule {}
