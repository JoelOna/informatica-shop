import { Component, OnInit,Input,ElementRef } from '@angular/core';
import { IProduct } from 'src/app/interface/iproduct';
import productJSON from '../../mok/products.json'
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductDataService,private elementRef: ElementRef){}
  products: IProduct[] = []
  data: any = productJSON;
  nextPage: string = ''
  prevPage: string = ''
  @Input() mostViewed: boolean = false
  @Input() filterCat : string = ''

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      respone =>{
        this.products = respone.body.data
        if (this.mostViewed) {
          this.products = this.products.slice(0,4)
        }

        this.nextPage = respone.body.info.next_page
        this.prevPage = respone.body.info.prev_page
        console.log(this.nextPage)
        console.log(this.prevPage)

        const nextPageBtn = this.elementRef.nativeElement.querySelector('#next-page')
        nextPageBtn.addEventListener('click', ()=> this.getNextProducts(this.nextPage, nextPageBtn))
    
        

        const prevPageBtn = this.elementRef.nativeElement.querySelector('#prev-page')
        prevPageBtn.addEventListener('click', ()=> this.getPrevProducts(this.prevPage, prevPageBtn, nextPageBtn))
  
      },
      error=>{

      }
     
    )

    if (this.filterCat  ) {
      
    }
  }

  private getNextProducts(url:string,nextPageBtn:any){
    if (url === null) {
      nextPageBtn?.setAttribute('disabled', 'true');
    }
    this.productService.getProducts(url).subscribe(
      response =>{
        console.log(response.body.data)
        this.products = []
        this.products = response.body.data
        if (response.body.info.next_page == null) {
          nextPageBtn?.setAttribute('disabled', 'true');
        }
        this.nextPage = response.body.info.next_page
        console.log(this.nextPage);
        
        
      }, error=>{

      }
      
    )
  }
  private getPrevProducts(url:string, prevPageBtn:any, nextPageBtn:any){
    this.productService.getProducts(url).subscribe(
      response =>{
        console.log('prev: ',response.body.data)
        this.products = []
        this.products = response.body.data
        if (response.body.info.prev_page == null) {
          prevPageBtn?.setAttribute('disabled', 'true');
          nextPageBtn?.setAttribute('disabled', 'false');
        }
        this.nextPage = response.body.info.next_page
        
      }, error=>{

      }
      
    )
  }
}
