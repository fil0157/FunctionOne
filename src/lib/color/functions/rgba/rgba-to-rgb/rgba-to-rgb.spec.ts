// Project
import { rgbaToGgb } from './rgba-to-rgb';
import { RGB } from '../../../interfaces';



describe(`rgbaToGgb()`, () => {
  it(`rgbaToGgb({ r: 0, g: 0, b: 0, a: 0 }) return { r: 0, g: 0, b: 0 }`, () => {
    const car: RGB = rgbaToGgb({ r: 0, g: 0, b: 0, a: 0 });
    expect(car).toEqual({ r: 0, g: 0, b: 0 });
  });

  it(`rgbaToGgb({ r: 1, g: 1, b: 1, a: 1 }) return { r: 1, g: 1, b: 1 }`, () => {
    const car: RGB = rgbaToGgb({ r: 1, g: 1, b: 1, a: 0 });
    expect(car).toEqual({ r: 1, g: 1, b: 1 });
  });

  it(`rgbaToGgb({ r: 256, g: 256, b: 256, a: 1 }) return { r: 256, g: 256, b: 256 }`, () => {
    const car: RGB = rgbaToGgb({ r: 256, g: 256, b: 256, a: 0 });
    expect(car).toEqual({ r: 256, g: 256, b: 256 });
  });
});
