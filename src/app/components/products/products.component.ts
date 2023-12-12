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
    this.productService.getCharacters().subscribe(
      respone =>{
        this.products = respone.body.data
        this.nextPage = respone.body.info.next_page
        this.prevPage = respone.body.info.prev_page
        console.log(this.nextPage)
        console.log(this.prevPage)

        const nextPageBtn = this.elementRef.nativeElement.querySelector('#next-page')
        nextPageBtn.addEventListener('click', ()=> this.getNextProducts(this.nextPage, nextPageBtn))
        
    
        

        const prevPageBtn = this.elementRef.nativeElement.querySelector('#prev-page')
        prevPageBtn.addEventListener('click', ()=> this.getPrevProducts(this.prevPage, prevPageBtn))
  
      },
      error=>{

      }
     
    )
   
    
    // if (this.mostViewed) {
    //   this.products = this.products.slice(0,4)
    // }

    if (this.filterCat  ) {
      
    }
  }

  private getNextProducts(url:string,nextPageBtn:any){
    if (url === null) {
      nextPageBtn?.setAttribute('disabled', 'true');
    }
    this.productService.getCharacters(url).subscribe(
      response =>{
        console.log(response.body.data)
        this.products.push(...response.body.data)
        if (response.body.info.next_page == null) {
          nextPageBtn?.setAttribute('disabled', 'true');
        }
        this.nextPage = response.body.info.next_page
        console.log(this.nextPage);
        
        
      }, error=>{

      }
      
    )
  }
  private getPrevProducts(url:string, prevPageBtn:any){
    this.productService.getCharacters(url).subscribe(
      response =>{
        console.log(response.body.data)
        this.products.push(...response.body.data)
        if (response.body.info.next_page == null) {
          prevPageBtn?.setAttribute('disabled', 'true');
        }
        this.nextPage = response.body.info.next_page
        
      }, error=>{

      }
      
    )
  }
}
