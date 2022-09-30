import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ListaComponent } from './lista/lista.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './perfil/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    PesquisaComponent,
    ListaComponent,
    HeaderComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
