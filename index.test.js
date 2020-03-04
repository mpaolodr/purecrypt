require("dotenv").config();
const { encrypt } = require("./index.js");

describe("TEST ENCRYPT FUNCTION", () => {
  test("value is undefined", () => {
    const value = undefined;

    expect(encrypt(value)).toBe("Input value is undefined");
  });
});
