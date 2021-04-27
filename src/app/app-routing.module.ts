import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportanteComponent } from './views/lists/importante/importante.component';
import { MeuDiaComponent } from './views/lists/meu-dia/meu-dia.component';
import { NavbarComponent } from './views/navbar/navbar.component';

const routes: Routes = [
  {path: "app", component: NavbarComponent, children: [
    {path: "meu-dia", component: MeuDiaComponent},
    {path: "importante", component: ImportanteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
