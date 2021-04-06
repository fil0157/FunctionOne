// Project
import { isRgbString } from './is-rgb-string';



describe(`isRgbString()`, () => {
  it(`isRgbString('rgb(0, 0, 0)') return true`, () => {
    const bool = isRgbString('rgb(0, 0, 0)');
    expect(bool).toEqual(true);
  });

  it(`isRgbString('rgb(0,0,0)') return true`, () => {
    const bool = isRgbString('rgb(0,0,0)');
    expect(bool).toEqual(true);
  });

  it(`isRgbString('rgb(100, 100, 100)') return true`, () => {
    const bool = isRgbString('rgb(100, 100, 100)');
    expect(bool).toEqual(true);
  });

  it(`isRgbString('rgb(1, 2, 3)') return true`, () => {
    const bool = isRgbString('rgb(1, 2, 3)');
    expect(bool).toEqual(true);
  });

  it(`isRgbString('rgb(999999, 0, 0)') return true`, () => {
    const bool = isRgbString('rgb(999999, 0, 0)');
    expect(bool).toEqual(true);
  });

  it(`isRgbString('rgb(0, 0, 0, 0)') return false`, () => {
    const bool = isRgbString('rgb(0, 0, 0, 0)');
    expect(bool).toEqual(false);
  });

  it(`isRgbString('rgb(0,0,0,0)') return false`, () => {
    const bool = isRgbString('rgb(0,0,0,0)');
    expect(bool).toEqual(false);
  });

  it(`isRgbString('rgb(0.5, 100, 100)') return false`, () => {
    const bool = isRgbString('rgb(0.5, 100, 100)');
    expect(bool).toEqual(false);
  });

  it(`isRgbString('rgb(100, 100.5, 100)') return false`, () => {
    const bool = isRgbString('rgb(100, 100.5, 100)');
    expect(bool).toEqual(false);
  });

  it(`isRgbString('rgb(-1, 1, 1)') return false`, () => {
    const bool = isRgbString('rgb(-1, 1, 1)');
    expect(bool).toEqual(false);
  });
});
