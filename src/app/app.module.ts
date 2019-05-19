import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ConsultaComponent } from './agenda/consulta/consulta.component';
import { CadastroComponent } from './agenda/cadastro/cadastro.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AgendaComponent,
    ConsultaComponent,
    CadastroComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
