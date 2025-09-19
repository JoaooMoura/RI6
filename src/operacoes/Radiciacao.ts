import Calculo from "../Calculo";

export default class Radiciacao extends Calculo {

  public calcular(indice: number, radicando: number): number {
    return Math.pow(radicando, 1 / indice);
  }
}