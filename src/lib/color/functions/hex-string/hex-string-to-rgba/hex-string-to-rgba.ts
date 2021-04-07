// Project
import { RGBA } from "../../../interfaces/rgba";



export function hexStringToRgba(hex: string): RGBA {
  if (hex[0] === "#") hex = hex.substr(1);

  if (hex.length < 6) {
    return {
      r: parseInt(hex[0] + hex[0], 16) | 0,
      g: parseInt(hex[1] + hex[1], 16) | 0,
      b: parseInt(hex[2] + hex[2], 16) | 0,
      a: 1,
    };
  }

  return {
    r: parseInt(hex.substr(0, 2), 16) | 0,
    g: parseInt(hex.substr(2, 2), 16) | 0,
    b: parseInt(hex.substr(4, 2), 16) | 0,
    a: 1,
  };
};
