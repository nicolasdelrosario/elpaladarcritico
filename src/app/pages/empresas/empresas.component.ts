import { Component } from '@angular/core';
import { Empresa } from 'src/app/entities/empresa';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent {
  listaEmpresas: Empresa[] = [];

  clientesFilter: any = { empresa: '' };
  p: number = 1;
  order: string = 'empresa';
  reversa: boolean = false;

  constructor(private empresasService: EmpresasService){}

  ngOnInit(): void {
    this.empresasService.empleadosSelect().subscribe(
      (res) => {
        console.log(res);
        this.listaEmpresas = JSON.parse(JSON.stringify(res));
      }
    )
  }

  setOrder(nombreColumna: string) {
    if(this.order === nombreColumna) {
      this.reversa = !this.reversa
    }  else {
      this.reversa = false;
    }
    this.order = nombreColumna
  }
}
