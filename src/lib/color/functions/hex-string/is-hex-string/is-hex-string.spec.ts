// Project
import { isHexString } from './is-hex-string';



describe(`isHexString()`, () => {
  it(`isHexString('#000') return true`, () => {
    const bool = isHexString('#000');
    expect(bool).toEqual(true);
  });

  it(`isHexString('#000000') return true`, () => {
    const bool = isHexString('#000000');
    expect(bool).toEqual(true);
  });

  it(`isHexString('#fff') return true`, () => {
    const bool = isHexString('#fff');
    expect(bool).toEqual(true);
  });

  it(`isHexString('#ffffff') return true`, () => {
    const bool = isHexString('#ffffff');
    expect(bool).toEqual(true);
  });

  it(`isHexString('#e5a') return true`, () => {
    const bool = isHexString('#e5a');
    expect(bool).toEqual(true);
  });

  it(`isHexString('#b70dc1') return true`, () => {
    const bool = isHexString('#b70dc1');
    expect(bool).toEqual(true);
  });

  it(`isHexString('#0') return false`, () => {
    const bool = isHexString('#0');
    expect(bool).toEqual(false);
  });

  it(`isHexString('#00') return false`, () => {
    const bool = isHexString('#00');
    expect(bool).toEqual(false);
  });

  it(`isHexString('#0000') return false`, () => {
    const bool = isHexString('#0000');
    expect(bool).toEqual(false);
  });

  it(`isHexString('#00000') return false`, () => {
    const bool = isHexString('#00000');
    expect(bool).toEqual(false);
  });

  it(`isHexString('#00=000') return false`, () => {
    const bool = isHexString('#00=000');
    expect(bool).toEqual(false);
  });

  it(`isHexString('#00000v') return false`, () => {
    const bool = isHexString('#00000v');
    expect(bool).toEqual(false);
  });
});
