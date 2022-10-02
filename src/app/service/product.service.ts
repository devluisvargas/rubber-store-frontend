import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/api/rubber-store/v1/product';

  constructor(private http: HttpClient) {
  }

  getAllProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
}
