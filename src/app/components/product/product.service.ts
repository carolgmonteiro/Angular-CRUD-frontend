import { Product } from './product.model';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
// esta clase pode ser injetada em outras classes
@Injectable({
  providedIn: 'root'
})
//logica y backend
export class ProductService {

  baseUrl = "http://localhost:3001/products"
  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  //toast quando produto é criado
  showMessage(msg: string): void {
    //mensagem, action
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }
}
