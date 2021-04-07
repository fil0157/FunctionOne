// Project
import { RGB } from '../../../interfaces/rgb';
import { RGBA } from '../../../interfaces/rgba';



export function rgbToGgba({ r, g, b }: RGB): RGBA {
  return ({ r, g, b, a: 1 });
}
