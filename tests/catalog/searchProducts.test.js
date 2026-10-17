const products = require("../../src/data/products");
const { searchProducts } = require("../../src/catalog");

describe("searchProducts", () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const name = "Наушники";
    expect(searchProducts(products, name).map((p) => p.id)).toEqual([1]);
  });
  test("'Чистый код' возвращает товар с ID 6", () => {
    const name = "Чистый код";
    expect(searchProducts(products, name).map((p) => p.id)).toEqual([6]);
  });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const name = "Настольная лампа";
    expect(searchProducts(products, name).map((p) => p.id)).toEqual([4]);
  });
  test("'javascript' возвращает товар с ID 3", () => {
    const name = "javascript";
    expect(searchProducts(products, name).map((p) => p.id)).toEqual([3]);
  });
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const name = "ЧЕХОЛ";
    expect(searchProducts(products, name).map((p) => p.id)).toEqual([5]);
  });
  test("'наушники' возвращает товар с ID 1", () => {
    const name = "наушники";
    expect(searchProducts(products, name).map((p) => p.id)).toEqual([1]);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const name = "";
    expect(searchProducts(products, name).map((p) => p.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const name = "     ";
    expect(searchProducts(products, name).map((p) => p.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const name = "\t\n";
    expect(searchProducts(products, name).map((p) => p.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
});
