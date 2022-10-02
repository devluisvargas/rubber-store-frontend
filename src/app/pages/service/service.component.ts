import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../interfaces/product";
import {tap} from "rxjs";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  products: Product[] = [];

  constructor(private productSvc: ProductService) {
  }

  ngOnInit(): void {
    this.productSvc.getAllProduct()
      .pipe(
        tap(products => {
          this.products = products;
        })
      ).subscribe();
  }


}
