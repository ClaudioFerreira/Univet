import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ConsultaComponent } from './agenda/consulta/consulta.component';
import { CadastroComponent } from './agenda/cadastro/cadastro.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ClientesComponent } from './agenda/clientes/clientes.component';
import { ConstultaUsuariosComponent } from './usuarios/constulta-usuarios/constulta-usuarios.component';
import { CadastroUsuariosComponent } from './usuarios/cadastro-usuarios/cadastro-usuarios.component';
import { ConsultaVeterinariaComponent } from './consulta-veterinaria/consulta-veterinaria.component';
import { ConsultaListaComponent } from './consulta-veterinaria/consulta-lista/consulta-lista.component';
import { ConsultaCadastroComponent } from './consulta-veterinaria/consulta-cadastro/consulta-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AgendaComponent,
    ConsultaComponent,
    CadastroComponent,
    UsuariosComponent,
    ClientesComponent,
    ConstultaUsuariosComponent,
    CadastroUsuariosComponent,
    ConsultaVeterinariaComponent,
    ConsultaListaComponent,
    ConsultaCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
