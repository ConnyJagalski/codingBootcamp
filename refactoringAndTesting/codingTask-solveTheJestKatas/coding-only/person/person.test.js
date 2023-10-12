import { Person } from "./person";

describe("Person Class", function () {
  it("should have a name property", function () {
    const person = new Person();
    expect(person).toHaveProperty("name");
  });

  it("should pass the name in the constructor", function () {
    const person = new Person("Hans");
    expect(person).toHaveProperty("name");
    expect(person.name).toEqual("Hans");
  });

  it("should have a introduce() method that returns a introduction", function () {
    const person = new Person("Hans");
    expect(person).toHaveProperty("introduce");
    expect(person.introduce()).toEqual("My name is Hans");
  });

  it("should have a hobbies property", function () {
    const person = new Person();
    expect(person).toHaveProperty("hobbies");
  });

  it("should have a hobbies property initialized as empty array", function () {
    const person = new Person();
    expect(Array.isArray(person.hobbies)).toBe(true);
    expect(person.hobbies.length).toEqual(0);
  });

  it("should have an addHobby method", function () {
    const person = new Person("Hans");
    expect(person).toHaveProperty("addHobby");
  });

  it("should have an addHobby method that adds a hobby to the hobbies array", function () {
    const person = new Person("Hans");
    const oldLength = person.hobbies.length;
    person.addHobby("Tennis");
    expect(person.hobbies.length).toEqual(oldLength + 1);
    expect(person.hobbies[oldLength]).toEqual("Tennis");
  });
});
