import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:'', component: HomeComponent,title: 'Home | Informatica shop'},
  {path:'products', component: ProductsComponent,title: 'Products | Informatica shop'},
  {path:'product/:id', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
