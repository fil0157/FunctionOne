export function isHexString(rgbaString: string): boolean {
  const matcher = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
  const match = matcher.exec(rgbaString);
  return !!match
}
