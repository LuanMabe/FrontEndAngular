import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  categorias: any;
  categoriaList: any;

  constructor(private _categorias: CategoriasService) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this._categorias.getCategorias()
      .subscribe(respuesta => {
        this.categorias = respuesta;
        this.categoriaList = this.categorias.data;
        console.log(this.categoriaList);
        
      })
  }

}
