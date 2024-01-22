import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { ViewProductComponent } from './components/products/view-product/view-product.component';
import { CategoryListComponent } from './components/categories/category-list/category-list.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';



const adminRoutes: Routes = [
  { path: '', component: DashboardContentComponent },
  { path: 'productos', component: ListProductsComponent},
  {path: 'productos/:id', component: ViewProductComponent},
  {path: 'productos/edit/:id', component: EditProductComponent},
  {path: 'categorias', component:CategoryListComponent}
]

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
  declarations: [
  ],
})
export class AdminRoutingModule {}
