const products = require("../../src/data/products");
const { sortProductsByPrice } = require("../../src/catalog");

describe("sortProductsByPrice", () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const direction = "asc";
    expect(sortProductsByPrice(products, direction).map((p) => p.id)).toEqual([
      3, 6, 5, 4, 2, 1,
    ]);
  });
  test("все товары без направления сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(sortProductsByPrice(products).map((p) => p.id)).toEqual([
      3, 6, 5, 4, 2, 1,
    ]);
  });
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const direction = "asc";
    const inproducts = products.filter(({ id }) => [1, 3, 4].includes(id));
    expect(sortProductsByPrice(inproducts, direction).map((p) => p.id)).toEqual(
      [3, 4, 1],
    );
  });
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const direction = "desc";
    expect(sortProductsByPrice(products, direction).map((p) => p.id)).toEqual([
      1, 2, 4, 5, 6, 3,
    ]);
  });
  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const direction = "desc";
    const inproducts = products.filter(({ id }) => [3, 1, 4].includes(id));
    expect(sortProductsByPrice(inproducts, direction).map((p) => p.id)).toEqual(
      [1, 4, 3],
    );
  });
  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const direction = "desc";
    const inproducts = products.filter(({ id }) => [5, 2, 6].includes(id));
    expect(sortProductsByPrice(inproducts, direction).map((p) => p.id)).toEqual(
      [2, 5, 6],
    );
  });
  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const direction = "asc";
    const inproducts = products.filter(({ id }) => [1, 3, 4].includes(id));
    sortProductsByPrice(inproducts, direction);
    expect(inproducts.map((p) => p.id)).toEqual([1, 3, 4]);
  });
  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const direction = "desc";
    const inproducts = products.filter(({ id }) => [1, 3, 4].includes(id));
    sortProductsByPrice(inproducts, direction);
    expect(inproducts.map((p) => p.id)).toEqual([1, 3, 4]);
  });
  test("направление по умолчанию не меняет исходный массив всех товаров", () => {
    sortProductsByPrice(products);
    expect(products.map((p) => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
