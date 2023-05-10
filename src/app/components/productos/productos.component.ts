import { Component, Input } from '@angular/core';
import { Categoria } from 'src/app/entities/categoria';
import { Producto } from 'src/app/entities/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  @Input() categoriaX: Categoria | undefined;

  listaProductos: Producto[] | undefined;

  constructor(private productosService: ProductosService){}


  ngOnChanges(): void {
    this.productosService.productosSelect(this.categoriaX?.idcategoria).subscribe(
      (res) => {
        this.listaProductos = JSON.parse(JSON.stringify(res));
      }
    )
  }
}
