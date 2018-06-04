import { Routes, RouterModule, RoutesRecognized } from '@angular/router';
import { 
    PortafolioComponent,
    AboutComponent,
    ProductoComponent,
    SearchComponent
} from "./components/index.paginas";

const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'search/:termino', component: SearchComponent },    
    { path: '**', pathMatch: 'full',  redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
