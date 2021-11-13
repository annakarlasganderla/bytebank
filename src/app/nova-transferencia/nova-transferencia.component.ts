import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})

export class NovaTranferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>(); // objeto que transmite um evento

  valor: number;
  destino: number;

  transferir() {
    console.log("Solicitada nova transferência");

    // emito o valor informado
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir); // printo o valor na tela

    this.limparCampos(); // limpo os campos
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
