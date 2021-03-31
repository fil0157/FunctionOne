// Project
import { RGB } from '../../../interfaces';



export function rgbToGgba({ r, g, b }: RGB) {
  return ({ r, g, b, a: 1 });
}
