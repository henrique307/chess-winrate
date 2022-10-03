import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './main/perfil/perfil.component';
import { PesquisaComponent } from './main/lista/pesquisa/pesquisa.component';
import { ListaComponent } from './main/lista/lista.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './main/perfil/info/info.component';
import { MainComponent } from './main/main.component';
import { ResultadoComponent } from './main/lista/resultado/resultado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    PesquisaComponent,
    ListaComponent,
    HeaderComponent,
    InfoComponent,
    MainComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
