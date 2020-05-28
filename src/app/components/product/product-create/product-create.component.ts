import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

// propLegal= "qualquer";
product: Product = {
  name: '',
  price: null
}
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  //chamar a partir do botao
  createProduct(): void{
    //vai fazer chamada a backend
    this.productService.create(this.product).subscribe(() =>{
     //toast
      this.productService.showMessage("Produto criado!")
      //vai pra tela de produto
      this.router.navigate(['/products'])
    })
    
  }
   //cancelar - navega ate outra pagina
   cancel(): void{
    this.router.navigate(['/products'])
  }
  // fazerAlgo(): void {
  //   console.log("Fazendo...")
  // }

}
