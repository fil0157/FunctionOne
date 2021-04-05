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

  it(`rgbToGgba({ r: 255, g: 255, b: 255 }) return { r: 255, g: 255, b: 255, a: 1 }`, () => {
    const foo: RGBA = rgbToGgba({ r: 255, g: 255, b: 255 });
    expect(foo).toEqual({ r: 255, g: 255, b: 255, a: 1 });
  });
});
