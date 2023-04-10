import { formatToEUR } from "./formatToEUR";

describe("formatToEUR", () => {
  it("formats a number with the correct decimal/thousands separator", () => {
    expect(formatToEUR(1000.5)).toContain("1.000,50");
    expect(formatToEUR(10.99)).toContain("10,99");
  });
});
