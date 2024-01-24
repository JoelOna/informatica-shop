import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';
import { ProductComponent } from './components/product/product.component';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { TotalEarnedComponent } from './admin/components/total-earned/total-earned.component';
import { ListProductsComponent } from './admin/components/products/list-products/list-products.component';
import { DashboardContentComponent } from './admin/components/dashboard-content/dashboard-content.component';
import { ViewProductComponent } from './admin/components/products/view-product/view-product.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryListComponent } from './admin/components/categories/category-list/category-list.component';
import { EditProductComponent } from './admin/components/products/edit-product/edit-product.component';
import { CartComponent } from './components/cart/cart.component';
import { ShopProcesComponent } from './components/shop-proces/shop-proces.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { CookieModule } from 'ngx-cookie';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    HomeComponent,
    FooterComponent,
    FilterProductsComponent,
    ProductComponent,
    AdminDashboardComponent,
    SignupComponent,
    TotalEarnedComponent,
    ListProductsComponent,
    DashboardContentComponent,
    ViewProductComponent,
    LoginComponent,
    CategoryListComponent,
    EditProductComponent,
    CartComponent,
    ShopProcesComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CookieModule.withOptions({storeUnencoded:false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
