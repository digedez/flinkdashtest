
import { RouterModule, Routes } from '@angular/router';
import { ContentHomeComponent } from './components/content/content-home/content-home.component';
import { ContentTarjetaComponent } from './components/content/content-tarjeta/content-tarjeta.component';
import { ContentAdmComponent } from './components/content/content-adm/content-adm.component';
import { ContentMetasComponent } from './components/content/content-metas/content-metas.component';
import { ContentPrestamoComponent } from './components/content/content-prestamo/content-prestamo.component';
import { ContentTransfComponent } from './components/content/content-transf/content-transf.component';
import { LoginComponent } from './components/login/login.component';
//import { AuthGuard } from './_guards/index';

const APP_ROUTES: Routes = [
  //{ path: '', component: ContentHomeComponent , canActivate: [AuthGuard] },
  { path: '', component: ContentHomeComponent },
  { path: 'tarjeta', component: ContentTarjetaComponent },
  { path: 'adm', component: ContentAdmComponent },
  { path: 'metas', component: ContentMetasComponent },
  { path: 'prestamo', component: ContentPrestamoComponent },
  { path: 'transf', component: ContentTransfComponent },
  { path: 'login', component: LoginComponent },

  //{ path: '**', pathMatch: 'full', redirectTo: '' }
  //{ path: '**', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
