import { Component} from '@angular/core';
import { InformacionService } from "../../services/informacion.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{
  constructor( public _infoService: InformacionService,
                private router:Router) {  }

  buscar_producto( termino:string ){
    /* console.log(termino); */
    this.router.navigate( ['search', termino] );
    
  }

}
