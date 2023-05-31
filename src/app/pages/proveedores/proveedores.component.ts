
import { Proveedor } from 'src/app/entities/proveedor';
import { Component } from '@angular/core';
import { ProovedoresService } from 'src/app/services/proovedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {
  message = "I just know that I know nothing.";
  listaProveedores: Proveedor[] = [];
  proveedoresFilter: any = { nombreempresa: '' };
  p: number = 1;
  order: string = 'nombreempresa';
  reversa: boolean = false;

  constructor(private proovedoresService: ProovedoresService){}

  ngOnInit(): void {
    this.proovedoresService.proveedoresSelect().subscribe(
      (res) => {
        console.log(res);
        this.listaProveedores = JSON.parse(JSON.stringify(res));
      }
    )
  }

  setOrder(nombreColumna: string) {
    if(this.order === nombreColumna) {
      this.reversa = !this.reversa;
    } else {
      this.reversa = false;
    }
    this.order = nombreColumna
  }
}
