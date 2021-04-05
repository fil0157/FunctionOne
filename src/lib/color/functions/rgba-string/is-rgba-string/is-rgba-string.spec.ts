// Project
import { isRgbaString } from './is-rgba-string';



describe(`isRgbaString()`, () => {
  it(`isRgbaString('rgba(0, 0, 0, 0)') return true`, () => {
    const bool = isRgbaString('rgba(0, 0, 0, 0)');
    expect(bool).toEqual(true);
  });

  it(`isRgbaString('rgba(0,0,0,0)') return true`, () => {
    const bool = isRgbaString('rgba(0,0,0,0)');
    expect(bool).toEqual(true);
  });

  it(`isRgbaString('rgba(0, 0, 0)') return true`, () => {
    const bool = isRgbaString('rgba(0, 0, 0)');
    expect(bool).toEqual(true);
  });

  it(`isRgbaString('rgba(0,0,0)') return true`, () => {
    const bool = isRgbaString('rgba(0,0,0)');
    expect(bool).toEqual(true);
  });

  it(`isRgbaString('rgba(100, 100, 100, 1)') return true`, () => {
    const bool = isRgbaString('rgba(100, 100, 100, 1)');
    expect(bool).toEqual(true);
  });

  it(`isRgbaString('rgba(1, 2, 3, 4)') return true`, () => {
    const bool = isRgbaString('rgba(1, 2, 3, 4)');
    expect(bool).toEqual(true);
  });

  it(`isRgbaString('rgba(999999, 0, 0, 0)') return true`, () => {
    const bool = isRgbaString('rgba(999999, 0, 0, 0)');
    expect(bool).toEqual(true);
  });

  it(`isRgbaString('rgba(1, 2, 3, 0.4)') return true`, () => {
    const bool = isRgbaString('rgba(1, 2, 3, 0.4)');
    expect(bool).toEqual(true);
  });

  it(`isRgbaString('rgba(0.5, 100, 100, 1)') return false`, () => {
    const bool = isRgbaString('rgba(0.5, 100, 100, 1)');
    expect(bool).toEqual(false);
  });

  it(`isRgbaString('rgba(100, 100.5, 100, 1)') return false`, () => {
    const bool = isRgbaString('rgba(0.5, 100, 100, 1)');
    expect(bool).toEqual(false);
  });

  it(`isRgbaString('rgba(-1, 1, 1, 1)') return false`, () => {
    const bool = isRgbaString('rgba(-1, 1, 1, 1)');
    expect(bool).toEqual(false);
  });

  it(`isRgbaString('rgba(1, 1, 1, -1)') return false`, () => {
    const bool = isRgbaString('rgba(1, 1, 1, -1)');
    expect(bool).toEqual(false);
  });

  it(`isRgbaString('rgba(1, 2, 3, .4)') return false`, () => {
    const bool = isRgbaString('rgba(1, 2, 3, .4)');
    expect(bool).toEqual(false);
  });
});
