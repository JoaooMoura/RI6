import Calculo from "../Calculo";

export default class Bhaskara extends Calculo {

  public calcular(...numeros: number[]): number[] {
    const [a, b, c] = numeros;

    const delta = Math.pow(b, 2) - 4 * a * c;

    if (delta < 0) {

      console.log("Delta é negativo. A equação não possui raízes reais.");
      return [];
    }
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    return [x1, x2];
  }
}