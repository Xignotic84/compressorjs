import { parseOrientation } from '../../../src/utilities';

describe('Check Utilities', () => {
  it('parseOrientation_1_[scaleX, scaleY, rotate]', (done) => {
    let orientation = parseOrientation(1);
    expect(orientation.scaleX)
      .to
      .be
      .equal(1);

    orientation = parseOrientation(2);
    expect(orientation.scaleX)
      .to
      .be
      .equal(-1);

    orientation = parseOrientation(3);
    expect(orientation.rotate)
      .to
      .be
      .equal(-180);

    orientation = parseOrientation(4);
    expect(orientation.scaleY)
      .to
      .be
      .equal(-1);

    orientation = parseOrientation(5);
    expect(orientation.rotate)
      .to
      .be
      .equal(90);
    expect(orientation.scaleY)
      .to
      .be
      .equal(-1);

    orientation = parseOrientation(6);
    expect(orientation.rotate)
      .to
      .be
      .equal(90);

    orientation = parseOrientation(7);
    expect(orientation.rotate)
      .to
      .be
      .equal(90);
    expect(orientation.scaleX)
      .to
      .be
      .equal(-1);

    orientation = parseOrientation(8);
    expect(orientation.rotate)
      .to
      .be
      .equal(-90);

    done();
  });
});
