import { Component, ElementRef, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/iproduct';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit{
  constructor(private productos_service: ProductDataService, private elementRef: ElementRef){}
  productos: IProduct[] = []
  nextPage: string = ''
  prevPage: string = ''

  ngOnInit(): void {
    this.getProductos();

    console.log(this.nextPage)
    console.log(this.prevPage)

    const nextPageBtn = this.elementRef.nativeElement.querySelector('#next-page')
    nextPageBtn.addEventListener('click', ()=> this.getNextProducts(this.nextPage, nextPageBtn,prevPageBtn))

    

    const prevPageBtn = this.elementRef.nativeElement.querySelector('#prev-page')
    prevPageBtn.addEventListener('click', ()=> this.getPrevProducts(this.prevPage, prevPageBtn, nextPageBtn))
  }

  getProductos():void{
    this.productos_service.getProducts().subscribe(
      resp =>{
        if (resp.body) {
          this.productos = resp.body.data
          this.nextPage = resp.body.info.next_page
          this.prevPage = resp.body.info.prev_page
        }
      },
      error =>{

      }
    )
  }

  private getNextProducts(url:string,nextPageBtn:any,prevPageBtn:any){
    this.productos_service.getProducts(url).subscribe(
      response =>{
        console.log('next: ',response.body.data)
        this.productos = []
        this.productos = response.body.data
        if (response.body.info.next_page == null) {
          nextPageBtn?.setAttribute('disabled', 'true');
          prevPageBtn?.setAttribute('disabled', 'false');
        }
        this.nextPage = response.body.info.next_page
        console.log(this.nextPage);
        
        
      }, error=>{

      }
      
    )
  }
  private getPrevProducts(url:string, prevPageBtn:any, nextPageBtn:any){
    this.productos_service.getProducts(url).subscribe(
      response =>{
        console.log('prev: ',response.body.data)
        this.productos = []
        this.productos = response.body.data
        if (response.body.info.prev_page == null) {
          prevPageBtn?.setAttribute('disabled', 'true');
          nextPageBtn?.setAttribute('disabled', 'false');
        }
        this.prevPage = response.body.info.prev_page
        
      }, error=>{

      }
      
    )
  }
}
