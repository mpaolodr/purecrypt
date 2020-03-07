const { encrypt, decrypt } = require("./index.js");

describe("TEST ENCRYPT FUNCTION", () => {
  // UNDEFINED
  test("value is undefined", () => {
    const value = undefined;
    expect(encrypt(value)).toBe("Input value is undefined");
    expect(typeof encrypt(value)).toBe("string");
    expect(encrypt(value)).toBeTruthy();
  });
  // NULL
  test("value is null", () => {
    const value = null;
    expect(encrypt(value)).toBe("Input value is null");
    expect(typeof encrypt(value)).toBe("string");
    expect(encrypt(value)).toBeTruthy();
  });

  // EMPTY STRING
  test("value is an empty string", () => {
    const value = "";
    expect(encrypt(value)).toBe("Input value is an empty string");
    expect(typeof encrypt(value)).toBe("string");
    expect(encrypt(value)).toBeTruthy();
  });

  // NOT STRING
  test("value is not a string", () => {
    const value = { value: test };
    expect(encrypt(value)).toBe("Input value must be a string");
    expect(typeof encrypt(value)).toBe("string");
    expect(encrypt(value)).toBeTruthy();
  });

  // STRING
  test("value given is a string", () => {
    const value = "testString";
    expect(encrypt(value)).not.toBeNull();
    expect(typeof encrypt(value)).toBe("string");
  });
});

describe("TEST DECRYPT FUNCTION", () => {
  // UNDEFINED
  test("value is undefined", () => {
    const value = undefined;
    expect(decrypt(value)).toBe("Input value is undefined");
    expect(typeof decrypt(value)).toBe("string");
    expect(decrypt(value)).toBeTruthy();
  });

  // NULL
  test("value is null", () => {
    const value = null;
    expect(decrypt(value)).toBe("Input value is null");
    expect(typeof decrypt(value)).toBe("string");
    expect(decrypt(value)).toBeTruthy();
  });

  // EMPTY STRING
  test("value is an empty string", () => {
    const value = "";
    expect(decrypt(value)).toBe("Input value is an empty string");
    expect(typeof decrypt(value)).toBe("string");
    expect(decrypt(value)).toBeTruthy();
  });

  // NOT STRING
  test("value is not a string", () => {
    const value = { value: test };
    expect(decrypt(value)).toBe("Input value must be a string");
    expect(typeof decrypt(value)).toBe("string");
    expect(decrypt(value)).toBeTruthy();
  });

  // STRING
  test("value given is a string", () => {
    const value = "testString";
    expect(encrypt(value)).not.toBeNull();
    expect(typeof encrypt(value)).toBe("string");
  });
});
