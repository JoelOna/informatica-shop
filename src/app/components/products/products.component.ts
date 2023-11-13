import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private http: HttpClient){}
  products: IProduct[] = []

  ngOnInit(): void {
    const productJSON = '../../mok/products.json'
    
    this.http.get<any[]>(productJSON).subscribe(
      (data) => {
        this.products = data;
        console.log(this.products); // Puedes hacer lo que necesites con los productos aquí
      },
      (error) => {
        console.error('Error cargando el archivo JSON', error);
      }
    );
  }
}
