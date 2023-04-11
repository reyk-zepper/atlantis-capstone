import formatTime from "../helper/formatTime";

test("formats time correctly", () => {
  expect(formatTime(65)).toBe("00:01:05");
  expect(formatTime(3600)).toBe("01:00:00");
  expect(formatTime(3661)).toBe("01:01:01");
});
