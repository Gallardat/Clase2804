import { Injectable } from '@angular/core';
import { Menu } from '../modelo/Menu';
@Injectable({
  providedIn: 'root'
})
export class ServicioMenuService {

  listaOpciones: Menu[]=[
    (new Menu ('icono1','opcion1',"ruta1")),
    (new Menu ('icono2','opcion2',"ruta2")),
    (new Menu ('icono3','opcion3',"ruta3"))
  ]
  constructor() { }
}
