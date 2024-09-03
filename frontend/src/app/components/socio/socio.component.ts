import { Component, OnInit } from '@angular/core';
import { Socio } from '../../models/socio.model';
import { SocioService } from '../../services/socio.service';

/*CODIGO DEL COMPONENTE SOCIO*/

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {

  socios: Socio[] = [];
  error: string = '';

  constructor(private socioService: SocioService) { }

  ngOnInit(): void {
    this.obtenerSocios();
  }

  obtenerSocios() {
    this.socioService.obtenerSocios().subscribe(
      (data: Socio[]) => {
        this.socios = data;
      },
      (      error: any) => {

      }
    );
  }

}
