// Project
import { RGB } from '../../../interfaces/rgb';
import { hexStringToRgb } from './hex-string-to-rgb';



describe(`hexStringToRgb()`, () => {
  it(`hexStringToRgb('#000') return { r: 0, g: 0, b: 0 }`, () => {
    const foo: RGB = hexStringToRgb('#000');
    expect(foo).toEqual({ r: 0, g: 0, b: 0 });
  });

  it(`hexStringToRgb('000') return { r: 0, g: 0, b: 0 }`, () => {
    const foo: RGB = hexStringToRgb('000');
    expect(foo).toEqual({ r: 0, g: 0, b: 0 });
  });

  it(`hexStringToRgb('#000000') return { r: 0, g: 0, b: 0 }`, () => {
    const foo: RGB = hexStringToRgb('#000000');
    expect(foo).toEqual({ r: 0, g: 0, b: 0 });
  });

  it(`hexStringToRgb('000000') return { r: 0, g: 0, b: 0 }`, () => {
    const foo: RGB = hexStringToRgb('000000');
    expect(foo).toEqual({ r: 0, g: 0, b: 0 });
  });

  it(`hexStringToRgb('#384') return { r: 51, g: 136, b: 68 }`, () => {
    const foo: RGB = hexStringToRgb('#384');
    expect(foo).toEqual({ r: 51, g: 136, b: 68 });
  });

  it(`hexStringToRgb('823') return { r: 136, g: 34, b: 51 }`, () => {
    const foo: RGB = hexStringToRgb('823');
    expect(foo).toEqual({ r: 136, g: 34, b: 51 });
  });

  it(`hexStringToRgb('#123456') return { r: 18, g: 52, b: 86 }`, () => {
    const foo: RGB = hexStringToRgb('#123456');
    expect(foo).toEqual({ r: 18, g: 52, b: 86 });
  });

  it(`hexStringToRgb('936572') return { r: 147, g: 101, b: 114 }`, () => {
    const foo: RGB = hexStringToRgb('936572');
    expect(foo).toEqual({ r: 147, g: 101, b: 114 });
  });

  it(`hexStringToRgb('#fff') return { r: 255, g: 255, b: 255 }`, () => {
    const foo: RGB = hexStringToRgb('#fff');
    expect(foo).toEqual({ r: 255, g: 255, b: 255 });
  });

  it(`hexStringToRgb('f') return { r: 255, g: 0, b: 0 }`, () => {
    const foo: RGB = hexStringToRgb('#f');
    expect(foo).toEqual({ r: 255, g: 0, b: 0 });
  });

  it(`hexStringToRgb('#f') return { r: 255, g: 0, b: 0 }`, () => {
    const foo: RGB = hexStringToRgb('#f');
    expect(foo).toEqual({ r: 255, g: 0, b: 0 });
  });

  it(`hexStringToRgb('ff') return { r: 255, g: 255, b: 0 }`, () => {
    const foo: RGB = hexStringToRgb('ff');
    expect(foo).toEqual({ r: 255, g: 255, b: 0 });
  });

  it(`hexStringToRgb('#ff') return { r: 255, g: 255, b: 0 }`, () => {
    const foo: RGB = hexStringToRgb('#ff');
    expect(foo).toEqual({ r: 255, g: 255, b: 0 });
  });

  it(`hexStringToRgb('ffff') return { r: 255, g: 255, b: 0 }`, () => {
    const foo: RGB = hexStringToRgb('#ff');
    expect(foo).toEqual({ r: 255, g: 255, b: 0 });
  });

  it(`hexStringToRgb('#ffff') return { r: 255, g: 255, b: 255 }`, () => {
    const foo: RGB = hexStringToRgb('#ffff');
    expect(foo).toEqual({ r: 255, g: 255, b: 255 });
  });

  it(`hexStringToRgb('fffff') return { r: 255, g: 255, b: 255 }`, () => {
    const foo: RGB = hexStringToRgb('fffff');
    expect(foo).toEqual({ r: 255, g: 255, b: 255 });
  });

  it(`hexStringToRgb('#fffff') return { r: 255, g: 255, b: 255 }`, () => {
    const foo: RGB = hexStringToRgb('#fffff');
    expect(foo).toEqual({ r: 255, g: 255, b: 255 });
  });
});
