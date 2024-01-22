import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/iproduct';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit{
  constructor(private route:ActivatedRoute, private productos_service:ProductDataService){}
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
    this.getProducto(productId)
  }

  private getProducto(product_id:any): void{
    this.productos_service.getProduct(product_id).subscribe(
      resp=>{
          if (resp.body.data) {
            this.producto = resp.body.data
          }
      },
      error=>{

      }
    )
  }

  private updateProducto():void{
    
  }
}
