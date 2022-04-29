import { Component  } from '@angular/core';
import { interval, timeout } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {


  //i18nselect
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  // i18nplural
  clientes: string [] = ['Maria','Pedro', 'Eduardo', 'Fernando', 'Hernando'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    this.nombre = 'Melisa';
    this.genero = 'femenino'



  }

  borrarCliente() {
    this.clientes.pop();
  }


  // keyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada' 
  }

  // JsonPipe
  heroes = [ {
    nombre: 'Superman',
    vuela: true 
  } ,
  {
    nombre: 'Robin',
    vuela: false 
  },
  {
    nombre: 'Aquaman',
    vuela: false
  },
]

// Async Pipe
miObservable = interval(2000);

valorPromesa = new Promise( (resolve, reject) => {

  setTimeout(() => {
    resolve( 'Tenemos data de la promesa' );
  }, 3500 );

});

}
