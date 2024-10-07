import { Component } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent {
  public resultado: string = "";

  clicar(valor: string) {
    if (valor === '=') {
      this.finalizar();
    } else if (valor === 'CE') {
      this.limpar();
    } else {
      this.resultado += valor;
    }
  }

  limpar() {
    this.resultado = "";
  }

  finalizar() {
    try {
      this.resultado = eval(this.resultado).toString();
    } catch (error) {
      this.resultado = 'Erro';
    }
  }
}
