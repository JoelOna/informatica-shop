import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { ShopProcesComponent } from './components/shop-proces/shop-proces.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UserReviewComponent } from './components/user/user-review/user-review.component';

const routes: Routes = [
  { path: 'ifshop-admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminRoutingModule), title: 'Admin | Informatica Shop' },
  {path:'', component: HomeComponent,title: 'Inicio | Informatica Shop'},
  {path:'products', component: ProductsComponent,title: 'Productos | Informatica Shop'},
  {path:'product/:id', component: ProductComponent},
  {path:'login', component: LoginComponent, title: 'Inicio sesión | Informatica Shop'},
  {path:'signup', component:SignupComponent, title: 'Registro | Informatica Shop'},
  {path:'carrito', component:CartComponent, title: 'Carrito | Informatica Shop'},
  {path:'proceso-compra', component:ShopProcesComponent, title: 'Proceso de comprar | Informatica Shop'},
  {path:'usuario/:user_name', component:UserProfileComponent},
  {path:'usuario/:user_name/reviews', component:UserReviewComponent, title: 'Reviews | Informatica Shop'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
