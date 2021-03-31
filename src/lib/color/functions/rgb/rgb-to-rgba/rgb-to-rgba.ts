// Project
import { RGB, RGBA } from '../../../interfaces';



export function rgbToGgba({ r, g, b }: RGB): RGBA {
  return ({ r, g, b, a: 1 });
}
