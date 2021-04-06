// Project
import { hexStringToRgbString } from './hex-string-to-rgb-string';



describe(`hexStringToRgbString()`, () => {
  it(`hexStringToRgbString('#000') return 'rgba(0, 0, 0)'`, () => {
    const foo: string = hexStringToRgbString('#000');
    expect(foo).toEqual('rgba(0, 0, 0)');
  });

  it(`hexStringToRgbString('#000000') return 'rgba(0, 0, 0)'`, () => {
    const foo: string = hexStringToRgbString('#000000');
    expect(foo).toEqual('rgba(0, 0, 0)');
  });

  it(`hexStringToRgbString('#019') return 'rgba(0, 17, 153)'`, () => {
    const foo: string = hexStringToRgbString('#019');
    expect(foo).toEqual('rgba(0, 17, 153)');
  });

  it(`hexStringToRgbString('#829') return 'rgba(136, 34, 153)'`, () => {
    const foo: string = hexStringToRgbString('#829');
    expect(foo).toEqual('rgba(136, 34, 153)');
  });

  it(`hexStringToRgbString('#034753') return 'rgba(3, 71, 83)'`, () => {
    const foo: string = hexStringToRgbString('#034753');
    expect(foo).toEqual('rgba(3, 71, 83)');
  });

  it(`hexStringToRgbString('#098302') return 'rgba(9, 131, 2)'`, () => {
    const foo: string = hexStringToRgbString('#098302');
    expect(foo).toEqual('rgba(9, 131, 2)');
  });

  it(`hexStringToRgbString('#fff') return 'rgba(255, 255, 255)'`, () => {
    const foo: string = hexStringToRgbString('#fff');
    expect(foo).toEqual('rgba(255, 255, 255)');
  });

  it(`hexStringToRgbString('#ffffff') return 'rgba(255, 255, 255)'`, () => {
    const foo: string = hexStringToRgbString('#ffffff');
    expect(foo).toEqual('rgba(255, 255, 255)');
  });

  it(`hexStringToRgbString('f') return 'rgba(255, 0, 0)'`, () => {
    const foo: string = hexStringToRgbString('f');
    expect(foo).toEqual('rgba(255, 0, 0)');
  });

  it(`hexStringToRgbString('#f') return 'rgba(255, 0, 0)'`, () => {
    const foo: string = hexStringToRgbString('#f');
    expect(foo).toEqual('rgba(255, 0, 0)');
  });

  it(`hexStringToRgbString('ff') return 'rgba(255, 255, 0)'`, () => {
    const foo: string = hexStringToRgbString('ff');
    expect(foo).toEqual('rgba(255, 255, 0)');
  });

  it(`hexStringToRgbString('#ff') return 'rgba(255, 255, 0)'`, () => {
    const foo: string = hexStringToRgbString('#ff');
    expect(foo).toEqual('rgba(255, 255, 0)');
  });

  it(`hexStringToRgbString('ffff') return 'rgba(255, 255, 255)'`, () => {
    const foo: string = hexStringToRgbString('ffff');
    expect(foo).toEqual('rgba(255, 255, 255)');
  });

  it(`hexStringToRgbString('#ffff') return 'rgba(255, 255, 255)'`, () => {
    const foo: string = hexStringToRgbString('#ffff');
    expect(foo).toEqual('rgba(255, 255, 255)');
  });

  it(`hexStringToRgbString('fffff') return 'rgba(255, 255, 255)'`, () => {
    const foo: string = hexStringToRgbString('fffff');
    expect(foo).toEqual('rgba(255, 255, 255)');
  });

  it(`hexStringToRgbString('#fffff') return 'rgba(255, 255, 255)'`, () => {
    const foo: string = hexStringToRgbString('#fffff');
    expect(foo).toEqual('rgba(255, 255, 255)');
  });
});
