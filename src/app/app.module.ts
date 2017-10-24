import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//COMPONENTES
import { MenuflinkComponent } from './components/menuflink/menuflink.component';
import { SidebarflinkComponent } from './components/sidebarflink/sidebarflink.component';

import { ContentComponent } from './components/content/content.component';
import { ContentHomeComponent } from './components/content/content-home/content-home.component';
import { ContentTarjetaComponent } from './components/content/content-tarjeta/content-tarjeta.component';
import { ContentAdmComponent } from './components/content/content-adm/content-adm.component';
import { ContentMetasComponent } from './components/content/content-metas/content-metas.component';
import { ContentPrestamoComponent } from './components/content/content-prestamo/content-prestamo.component';
import { ContentTransfComponent } from './components/content/content-transf/content-transf.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';

//RUTAS
import { APP_ROUTING } from './app.routes';

//SERVICIOS
//import { HomeService } from './services/home.service';

//GRAFICOS
//import { ChartsModule } from 'ng2-charts';
import { LineaComponent } from './components/linea/linea.component';

//MAPA
//import { AgmCoreModule } from '@agm/core';

//Auth Guard
//import { AuthGuard } from './_guards/index';


import { RouterModule, Routes } from '@angular/router';

//SERVICIOS
//import { HomeService } from './services/home.service';


//Auth Guard
//import { AuthGuard } from './_guards/index';

// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
//import { ChartsModule } from 'ng2-charts';

//MAPA
//import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    MenuflinkComponent,
    SidebarflinkComponent,
    ContentHomeComponent,
    ContentTarjetaComponent,
    ContentAdmComponent,
    ContentMetasComponent,
    ContentPrestamoComponent,
    ContentTransfComponent,
    LoginComponent,
    ContentComponent,
    LineaComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    // Include it under 'imports' in your application module
    // after BrowserModule.
    HttpClientModule,
    //ChartsModule,
    APP_ROUTING,
    /*
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCc3lAoUQO28K7jCfA5CbH864icV7uBeLA'
    })
    */


  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
