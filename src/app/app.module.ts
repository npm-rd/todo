import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuDiaComponent } from './views/lists/meu-dia/meu-dia.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { ImportanteComponent } from './views/lists/importante/importante.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuDiaComponent,
    NavbarComponent,
    ImportanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
