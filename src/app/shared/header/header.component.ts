import {Component, OnInit} from '@angular/core';

interface MenuItem {
  text: string;
  ruta: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menu: MenuItem[] = [{
    text: 'Inicio',
    ruta: './'
  }, {
    text: 'Quienes Somos',
    ruta: './aboutMe'
  }, {
    text: 'Servicios',
    ruta: './services'
  }, {
    text: 'Contacto'
    , ruta: './contact'
  }]
}
