import { Component } from '@angular/core';
import { Envios } from 'src/app/entities/envios';
import { EnviosService } from 'src/app/services/envios.service';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent {
  listaEnvios: Envios[] | undefined;

  constructor(private enviosService: EnviosService){}

  ngOnInit(): void {
    this.enviosService.enviosSelect().subscribe(
      (res) => {
        this.listaEnvios = JSON.parse(JSON.stringify(res));
      }
    )
  }
}
