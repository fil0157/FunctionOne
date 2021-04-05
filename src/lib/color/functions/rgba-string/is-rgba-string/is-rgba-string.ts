export function isRgbaString(rgbaString: string): boolean {
  const matcher = /rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*(\d+\.?\d*)?\)/;
  const match = matcher.exec(rgbaString);
  return !!match
}
