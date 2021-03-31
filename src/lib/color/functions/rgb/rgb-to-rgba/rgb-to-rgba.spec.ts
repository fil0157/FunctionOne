// Project
import { rgbToGgba } from './rgb-to-rgba';
import { RGBA } from '../../../interfaces';



describe(`rgbToGgba()`, () => {
  it(`rgbToGgba({ r: 0, g: 0, b: 0 }) return { r: 0, g: 0, b: 0, a: 1 }`, () => {
    const foo: RGBA = rgbToGgba({ r: 0, g: 0, b: 0 });
    expect(foo).toEqual({ r: 0, g: 0, b: 0, a: 1 });
  });

  it(`rgbToGgba({ r: 1, g: 1, b: 1 }) return { r: 1, g: 1, b: 1, a: 1 }`, () => {
    const foo: RGBA = rgbToGgba({ r: 1, g: 1, b: 1 });
    expect(foo).toEqual({ r: 1, g: 1, b: 1, a: 1 });
  });

  it(`rgbToGgba({ r: 256, g: 256, b: 256 }) return { r: 256, g: 256, b: 256, a: 1 }`, () => {
    const foo: RGBA = rgbToGgba({ r: 256, g: 256, b: 256 });
    expect(foo).toEqual({ r: 256, g: 256, b: 256, a: 1 });
  });
});
