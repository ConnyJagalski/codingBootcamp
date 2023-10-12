import { doubleCharacters } from "./double-characters";

describe("doubleCharacters", function () {
  it("should double all characters", function () {
    const result = doubleCharacters("a");
    expect(result).toEqual("aa");
  });

  it("should double all characters case-sensitive", function () {
    const result = doubleCharacters("Ab");
    expect(result).toEqual("AAbb");
  });

  it("should double spaces as well", function () {
    const result = doubleCharacters("Ab");
    expect(result).toEqual("AAbb");
  });
});
