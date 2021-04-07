// Project
import { RGBA } from '../../../interfaces/rgba';
import { hexStringToRgba } from './hex-string-to-rgba';



describe(`hexStringToRgba()`, () => {
  it(`hexStringToRgba('#000') return { r: 0, g: 0, b: 0, a: 1 }`, () => {
    const foo: RGBA = hexStringToRgba('#000');
    expect(foo).toEqual({ r: 0, g: 0, b: 0, a: 1 });
  });

  it(`hexStringToRgba('000') return { r: 0, g: 0, b: 0, a: 1 }`, () => {
    const foo: RGBA = hexStringToRgba('000');
    expect(foo).toEqual({ r: 0, g: 0, b: 0, a: 1 });
  });

  it(`hexStringToRgba('#000000') return { r: 0, g: 0, b: 0, a: 1 }`, () => {
    const foo: RGBA = hexStringToRgba('#000000');
    expect(foo).toEqual({ r: 0, g: 0, b: 0, a: 1 });
  });

  it(`hexStringToRgba('000000') return { r: 0, g: 0, b: 0, a: 1 }`, () => {
    const foo: RGBA = hexStringToRgba('000000');
    expect(foo).toEqual({ r: 0, g: 0, b: 0, a: 1 });
  });

  it(`hexStringToRgba('#384') return { r: 51, g: 136, b: 68, a: 1 }`, () => {
    const foo: RGBA = hexStringToRgba('#384');
    expect(foo).toEqual({ r: 51, g: 136, b: 68, a: 1 });
  });

  it(`hexStringToRgba('823') return { r: 136, g: 34, b: 51, a: 1 }`, () => {
    const foo: RGBA = hexStringToRgba('823');
    expect(foo).toEqual({ r: 136, g: 34, b: 51, a: 1 });
  });

  it(`hexStringToRgba('#123456') return { r: 18, g: 52, b: 86, a: 1 }`, () => {
    const foo: RGBA = hexStringToRgba('#123456');
    expect(foo).toEqual({ r: 18, g: 52, b: 86, a: 1 });
  });

  it(`hexStringToRgba('936572') return { r: 147, g: 101, b: 114, a: 1 }`, () => {
    const foo: RGBA = hexStringToRgba('936572');
    expect(foo).toEqual({ r: 147, g: 101, b: 114, a: 1 });
  });

  it(`hexStringToRgba('#fff') return { r: 255, g: 255, b: 255, a: 1 }`, () => {
    const foo: RGBA = hexStringToRgba('#fff');
    expect(foo).toEqual({ r: 255, g: 255, b: 255, a: 1 });
  });

  it(`hexStringToRgba('f') return { r: 255, g: 0, b: 0, a: 1 }`, () => {
    const foo: RGBA = hexStringToRgba('#f');
    expect(foo).toEqual({ r: 255, g: 0, b: 0, a: 1 });
  });

  it(`hexStringToRgba('#f') return { r: 255, g: 0, b: 0, a: 1 }`, () => {
    const foo: RGBA = hexStringToRgba('#f');
    expect(foo).toEqual({ r: 255, g: 0, b: 0, a: 1 });
  });

  it(`hexStringToRgba('ff') return { r: 255, g: 255, b: 0, a: 1 }`, () => {
    const foo: RGBA = hexStringToRgba('ff');
    expect(foo).toEqual({ r: 255, g: 255, b: 0, a: 1 });
  });

  it(`hexStringToRgba('#ff') return { r: 255, g: 255, b: 0, a: 1 }`, () => {
    const foo: RGBA = hexStringToRgba('#ff');
    expect(foo).toEqual({ r: 255, g: 255, b: 0, a: 1 });
  });

  it(`hexStringToRgba('ffff') return { r: 255, g: 255, b: 0, a: 1 }`, () => {
    const foo: RGBA = hexStringToRgba('#ff');
    expect(foo).toEqual({ r: 255, g: 255, b: 0, a: 1 });
  });

  it(`hexStringToRgba('#ffff') return { r: 255, g: 255, b: 255, a: 1 }`, () => {
    const foo: RGBA = hexStringToRgba('#ffff');
    expect(foo).toEqual({ r: 255, g: 255, b: 255, a: 1 });
  });

  it(`hexStringToRgba('fffff') return { r: 255, g: 255, b: 255, a: 1 }`, () => {
    const foo: RGBA = hexStringToRgba('fffff');
    expect(foo).toEqual({ r: 255, g: 255, b: 255, a: 1 });
  });

  it(`hexStringToRgba('#fffff') return { r: 255, g: 255, b: 255, a: 1 }`, () => {
    const foo: RGBA = hexStringToRgba('#fffff');
    expect(foo).toEqual({ r: 255, g: 255, b: 255, a: 1 });
  });
});
