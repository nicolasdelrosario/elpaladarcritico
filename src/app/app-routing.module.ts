import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path: 'empresas', component:EmpresasComponent},
  {path:'proovedores', component:ProveedoresComponent},
  {path:'empleados', component:EmpleadosComponent},
  {path:'tienda', component:TiendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
