import { createHashTable } from "./hash_table_ch";

const randomStr = () => (Math.random() + 1).toString(36).substring(7);

describe("Hash Table", () => {
  it("should set new items in the table", () => {
    const ht = createHashTable();

    expect(ht.size).toBe(0);
    for (let i = 0; i < 100; i++) ht.set(randomStr(), randomStr());
    expect(ht.size).toBe(100);
  });

  it("should not set incorrectly specified items", () => {
    const ht = createHashTable();

    expect(ht.size).toBe(0);

    ht.set();
    ht.set("bob");
    ht.set("", "builder");

    expect(ht.get("bob")).toBeUndefined();
    expect(ht.size).toBe(0);
  });

  it("should correctly retrieve set values from the table", () => {
    const ht = createHashTable();

    for (let i = 0; i < 100; i++) ht.set("bob" + i, "builder" + i);

    expect(ht.get("bob5")).toBe("builder5");

    ht.set("felix", "runner");
    ht.set("mario", "plumber");

    expect(ht.get("felix")).toBe("runner");
    expect(ht.get("mario")).toBe("plumber");

    expect(ht.get("mike")).toBeUndefined();
  });

  it("should rewrite item in the table", () => {
    const ht = createHashTable();

    expect(ht.size).toBe(0);
    ht.set("bob", "builder");
    ht.set("bob", "plumber");

    expect(ht.get("bob")).toBe("plumber");
    expect(ht.size).toBe(1);
  });

  it("should check if the key exist in the table", () => {
    const ht = createHashTable();

    ht.set("mario", "plumber");

    expect(ht.has("mario")).toBeTruthy();
    expect(ht.has("bob")).toBeFalsy();
    expect(ht.has()).toBeFalsy();
  });

  it("should delete items from the table", () => {
    const ht = createHashTable();
    for (let i = 0; i < 100; i++) ht.set("bob" + i, "builder" + i);
    expect(ht.size).toBe(100);

    for (let i = 0; i < 100; i += 2) ht.delete("bob" + i);
    expect(ht.size).toBe(50);

    for (let i = 0; i < 100; i += 2) expect(ht.has("bob" + i)).toBeFalsy();
    for (let i = 1; i < 100; i += 2) expect(ht.get("bob" + i)).toBeTruthy();
  });

  it("should not delete items when key is incorrectly specified", () => {
    const ht = createHashTable();

    expect(() => ht.delete("non existing value")).not.toThrow();

    ht.set("bob", "builder");

    expect(() => ht.delete()).not.toThrow();
    expect(() => ht.delete(null)).not.toThrow();
    expect(ht.size).toBe(1);
    expect(ht.has("bob")).toBeTruthy();
  });
});
