import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  titulo: string = "Minicalculadora"
  display = '0';
  valorInicial: number = 0
  operacion: string | number = "";


  keyLayout: Array<string | number> =
    ['C', '+/-', '%', '/',
      1,   2,     3,  'x',
      4,   5,     6,  '-',
      7,   8,     9,  '+',
      0,  '?',   '.'];

  borrarDisplay() {
    this.display = ' ';
  }


  numClic(val: number) {
    if (this.display === '0') {
      this.display = val.toString();
    } else {
      this.display = `${this.display}${val}`;
    }
  }

  select(op: number | string) {
    if (typeof (op) === "number") {
      this.numClic(op);
    }
    else if (typeof (op) === "string") {
      this.oper(op);
    }
  };



  oper(operacion: string) {
    this.valorInicial = parseFloat(this.display);
    this.operacion = operacion;
    this.display = '';
  }

  calcular() {

    const a = this.valorInicial;
    const b = parseFloat(this.display);
    let resultado: number = 0;

    switch (this.operacion) {
      case 'x':
        resultado = a * b;;
        break;
      case '%':
        resultado = a / b;
        break;
      case '+':
        resultado = a + b;
        break;
      case '-':
        resultado = a - b;
        break;
      case 'C':
        this.borrarDisplay();
        break;

      default:
        console.log("sin operaciones!!");
        break;
    }

    this.valorInicial = resultado;
    this.display = resultado.toString();
  }
}
