import { sum } from "./sum";

test("test for sum", () => {
  expect(sum(10, 20)).toBe(30);
});

test("Test for second condition", () => {
  expect(sum(20, 30)).toBe(50);
});
