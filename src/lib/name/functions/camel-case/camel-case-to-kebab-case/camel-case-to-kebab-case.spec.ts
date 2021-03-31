// Project
import { camelCaseToKebabCase } from './camel-case-to-kebab-case';



describe(`camelCaseToKebabCase()`, () => {
  it(`camelCaseToKebabCase('Foo') return 'foo'`, () => {
    const foo: string = camelCaseToKebabCase('Foo');
    expect(foo).toEqual('foo');
  });

  it(`camelCaseToKebabCase('FooBar') return 'foo-bar'`, () => {
    const foo: string = camelCaseToKebabCase('FooBar');
    expect(foo).toEqual('foo-bar');
  });

  it(`camelCaseToKebabCase('FooBooBar') return 'foo-boo-bar'`, () => {
    const foo: string = camelCaseToKebabCase('FooBooBar');
    expect(foo).toEqual('foo-boo-bar');
  });
});
