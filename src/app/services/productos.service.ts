import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { LOADIPHLPAPI, resolve } from 'dns';
import { reject } from 'q';

@Injectable()
export class ProductosService {
  
  productos:any[]=[];
  productos_filtrado:any[]=[];
  cargando_productos:boolean = true;
  constructor( private http: Http) {
    this.cargar_productos();
   }

  public buscar_productos( termino:string ){
  

    if(this.productos.length === 0){
      this.cargar_productos().then(()=>{
        // termino la carga
        this.filtrar_productos(termino);
      }) 
    }else{
      this.filtrar_productos(termino);
    }
  }


  private filtrar_productos( termino:string ){
    this.productos_filtrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod =>{
      if( prod.categoria.toLocaleLowerCase().indexOf( termino ) >=0 || prod.titulo.toLocaleLowerCase().indexOf( termino ) >=0 ){
        this.productos_filtrado.push( prod );
      }
      
    });
  }


  
  public cargar_producto(cod:string){
    return this.http.get(`https://portafolio-ts.firebaseio.com/productos/${ cod }.json`);
  }

  public cargar_productos(){
    this.cargando_productos = true;

    let promesa = new Promise ( (resolve, reject)=>{

      this.http.get('https://portafolio-ts.firebaseio.com/productos_idx.json')
              .subscribe(res => {
                //console.log(res.json());
  
                //setTimeout(()=>{
                  this.cargando_productos = false;
                  this.productos = res.json();
                  resolve();
                //},1500)
  
              });
    });

    return promesa;

  }



}
