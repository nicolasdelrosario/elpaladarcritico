import { Component } from '@angular/core';
import { Empresa } from 'src/app/entities/empresa';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent {
  listaEmpresas: Empresa[] | undefined;

  constructor(private empresasService: EmpresasService){}

  ngOnInit(): void {
    this.empresasService.empleadosSelect().subscribe(
      (res) => {
        console.log(res);
        this.listaEmpresas = JSON.parse(JSON.stringify(res));
      }
    )
  }
}
