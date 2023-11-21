import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: 'ifshop-admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminRoutingModule) },
  {path:'', component: HomeComponent,title: 'Inicio | Informatica Shop'},
  {path:'products', component: ProductsComponent,title: 'Productos | Informatica Shop'},
  {path:'product/:id', component: ProductComponent},
  {path:'login', component: LoginComponent, title: 'Inicio sesión | Informatica Shop'},
  {path:'signup', component:SignupComponent, title: 'Registro | Informatica Shop'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
