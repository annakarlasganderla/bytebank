import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // tag html
  templateUrl: './app.component.html',  // conteúdo da tag
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bytebank';

  // forma 1
  // destino: number;
  // valor: number;

  // refatorado
  transferencias: any[] = [];  // array inicializado

  transferir($event) {
    console.log($event);
  // forma 1
  //  this.destino = $event.destino;
  //  this.valor = $event.valor;

  // refatorado
    const transferencia = {...$event, data: new Date() }
    this.transferencias.push(transferencia); // a cada trasnfaaz]erencia, ele coloca em uma posiçao do array
  }
}
