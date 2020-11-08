export function camelCaseToKebabCase(expression: string): string {
  return expression.replace(/[\w]([A-Z])/g, s => {
    return s[0] + '-' + s[1];
  }).toLowerCase();
}
