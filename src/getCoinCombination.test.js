'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`array length should be equal to 4`, () => {
    const expectedResult = getCoinCombination(25);

    expect(expectedResult)
      .toHaveLength(4);
  });

  it(`should work correctly for 1 penny`, () => {
    const expectedResult = getCoinCombination(1);

    expect(expectedResult)
      .toEqual([1, 0, 0, 0]);
  });

  it(`should work correctly for 4 penny`, () => {
    const expectedResult = getCoinCombination(4);

    expect(expectedResult)
      .toEqual([4, 0, 0, 0]);
  });

  it(`should work correctly for 1 nickel`, () => {
    const expectedResult = getCoinCombination(5);

    expect(expectedResult)
      .toEqual([0, 1, 0, 0]);
  });

  it(`should work correctly for 1 dime`, () => {
    const expectedResult = getCoinCombination(10);

    expect(expectedResult)
      .toEqual([0, 0, 1, 0]);
  });

  it(`should work correctly for 2 dimes`, () => {
    const expectedResult = getCoinCombination(20);

    expect(expectedResult)
      .toEqual([0, 0, 2, 0]);
  });

  it(`should work correctly for 1 quarter`, () => {
    const expectedResult = getCoinCombination(25);

    expect(expectedResult)
      .toEqual([0, 0, 0, 1]);
  });

  it(`should work correctly for 4 quarters`, () => {
    const expectedResult = getCoinCombination(100);

    expect(expectedResult)
      .toEqual([0, 0, 0, 4]);
  });
});
