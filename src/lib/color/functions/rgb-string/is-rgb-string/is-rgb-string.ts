export function isRgbString(rgbaString: string): boolean {
  const matcher = /rgb?\((\d+),\s*(\d+),\s*(\d+)?\)/;
  const match = matcher.exec(rgbaString);
  return !!match
}
