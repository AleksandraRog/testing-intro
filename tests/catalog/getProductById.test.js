const products = require("../../src/data/products");
const { getProductById } = require("../../src/catalog");

describe("getProductById", () => {
  test("ID 1 возвращает products[0]", () => {
    const ID = 1;
    expect(getProductById(products, ID)).toEqual(products[0]);
  });
  test("ID 4 возвращает products[3]", () => {
    const ID = 4;
    expect(getProductById(products, ID)).toEqual(products[3]);
  });
  test("ID 6 возвращает products[5]", () => {
    const ID = 6;
    expect(getProductById(products, ID)).toEqual(products[5]);
  });
  test("ID 0 возвращает null", () => {
    const ID = 0;
    expect(getProductById(products, ID)).toEqual(null);
  });
  test("ID 999 возвращает null", () => {
    const ID = 999;
    expect(getProductById(products, ID)).toEqual(null);
  });
  test("ID -1 возвращает null", () => {
    const ID = -1;
    expect(getProductById(products, ID)).toEqual(null);
  });
  test("строковый ID '1' возвращает null", () => {
    const ID = "1";
    expect(getProductById(products, ID)).toEqual(null);
  });
  test("ID undefined возвращает null", () => {
    const ID = undefined;
    expect(getProductById(products, ID)).toEqual(null);
  });
  test("ID NaN возвращает null", () => {
    const ID = NaN;
    expect(getProductById(products, ID)).toEqual(null);
  });
});
