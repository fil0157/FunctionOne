export function hexStringToRgbaString(hex: string): string {
  if (hex[0] === "#") hex = hex.substr(1);

  if (hex.length < 6) {
    let r: number = parseInt(hex[0] + hex[0], 16) | 0;
    let g: number = parseInt(hex[1] + hex[1], 16) | 0;
    let b: number = parseInt(hex[2] + hex[2], 16) | 0;
    let a: number = 1;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  let r: number = parseInt(hex.substr(0, 2), 16) | 0;
  let g: number = parseInt(hex.substr(2, 2), 16) | 0;
  let b: number = parseInt(hex.substr(4, 2), 16) | 0;
  let a: number = 1;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
