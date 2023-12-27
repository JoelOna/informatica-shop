import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/iproduct';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit{
  constructor (private productos_services: ProductDataService,private route: ActivatedRoute){}
  producto: IProduct = {
    id: 0,
    prod_name:'',
    prod_description:'',
    prod_name_en:'',
    prod_description_en:'',
    prod_price:0,
    prod_stock_quantity:0,
    prod_is_active:0,
    prod_rate:0,
    prod_opinion:'',
    prod_views:0,
    prod_image: ''
  }
  ngOnInit(): void {
      const productId = this.route.snapshot.paramMap.get('id')
      this.getProduct(productId)
  }

  getProduct(product_id:any):IProduct{
      this.productos_services.getProduct(product_id).subscribe(
        resp =>{
            if (resp.body) {
              this.producto = resp.body.data
            }
        },error=>{

        }
      )
    return this.producto
  }
}
