// Project
import { hexStringToRgbaString } from './hex-string-to-rgba-string';



describe(`hexStringToRgbaString()`, () => {
  it(`hexStringToRgbaString('#000') return 'rgba(0, 0, 0, 1)'`, () => {
    const foo: string = hexStringToRgbaString('#000');
    expect(foo).toEqual('rgba(0, 0, 0, 1)');
  });

  it(`hexStringToRgbaString('#000000') return 'rgba(0, 0, 0, 1)'`, () => {
    const foo: string = hexStringToRgbaString('#000000');
    expect(foo).toEqual('rgba(0, 0, 0, 1)');
  });

  it(`hexStringToRgbaString('#019') return 'rgba(0, 17, 153, 1)'`, () => {
    const foo: string = hexStringToRgbaString('#019');
    expect(foo).toEqual('rgba(0, 17, 153, 1)');
  });

  it(`hexStringToRgbaString('#829') return 'rgba(136, 34, 153, 1)'`, () => {
    const foo: string = hexStringToRgbaString('#829');
    expect(foo).toEqual('rgba(136, 34, 153, 1)');
  });

  it(`hexStringToRgbaString('#034753') return 'rgba(3, 71, 83, 1)'`, () => {
    const foo: string = hexStringToRgbaString('#034753');
    expect(foo).toEqual('rgba(3, 71, 83, 1)');
  });

  it(`hexStringToRgbaString('#098302') return 'rgba(9, 131, 2, 1)'`, () => {
    const foo: string = hexStringToRgbaString('#098302');
    expect(foo).toEqual('rgba(9, 131, 2, 1)');
  });

  it(`hexStringToRgbaString('#fff') return 'rgba(255, 255, 255, 1)'`, () => {
    const foo: string = hexStringToRgbaString('#fff');
    expect(foo).toEqual('rgba(255, 255, 255, 1)');
  });

  it(`hexStringToRgbaString('#ffffff') return 'rgba(255, 255, 255, 1)'`, () => {
    const foo: string = hexStringToRgbaString('#ffffff');
    expect(foo).toEqual('rgba(255, 255, 255, 1)');
  });

  it(`hexStringToRgbaString('f') return 'rgba(255, 0, 0, 1)'`, () => {
    const foo: string = hexStringToRgbaString('f');
    expect(foo).toEqual('rgba(255, 0, 0, 1)');
  });

  it(`hexStringToRgbaString('#f') return 'rgba(255, 0, 0, 1)'`, () => {
    const foo: string = hexStringToRgbaString('#f');
    expect(foo).toEqual('rgba(255, 0, 0, 1)');
  });

  it(`hexStringToRgbaString('ff') return 'rgba(255, 255, 0, 1)'`, () => {
    const foo: string = hexStringToRgbaString('ff');
    expect(foo).toEqual('rgba(255, 255, 0, 1)');
  });

  it(`hexStringToRgbaString('#ff') return 'rgba(255, 255, 0, 1)'`, () => {
    const foo: string = hexStringToRgbaString('#ff');
    expect(foo).toEqual('rgba(255, 255, 0, 1)');
  });

  it(`hexStringToRgbaString('ffff') return 'rgba(255, 255, 255, 1)'`, () => {
    const foo: string = hexStringToRgbaString('ffff');
    expect(foo).toEqual('rgba(255, 255, 255, 1)');
  });

  it(`hexStringToRgbaString('#ffff') return 'rgba(255, 255, 255, 1)'`, () => {
    const foo: string = hexStringToRgbaString('#ffff');
    expect(foo).toEqual('rgba(255, 255, 255, 1)');
  });

  it(`hexStringToRgbaString('fffff') return 'rgba(255, 255, 255, 1)'`, () => {
    const foo: string = hexStringToRgbaString('fffff');
    expect(foo).toEqual('rgba(255, 255, 255, 1)');
  });

  it(`hexStringToRgbaString('#fffff') return 'rgba(255, 255, 255, 1)'`, () => {
    const foo: string = hexStringToRgbaString('#fffff');
    expect(foo).toEqual('rgba(255, 255, 255, 1)');
  });
});
