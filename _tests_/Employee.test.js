const Employee = require("../lib/Employee"); // Import the Employee class from the ../lib/Employee.js file

test("Can instantiate Employee instance", () => { // Start a test case
  const e = new Employee(); // Create a new instance of Employee
  expect(typeof e).toBe("object"); // Verify that the type of e is "object"
});

test("Can set name via constructor arguments", () => { // Start another test case
  const name = "Alice"; // Define the name variable
  const e = new Employee(name); // Create a new instance of Employee with the name Alice
  expect(e.name).toBe(name); // Verify that the name property of the Employee instance is Alice
});

test("Can set id via constructor argument", () => { // Start another test case
  const testValue = 100; // Define the testValue variable
  const e = new Employee("Foo", testValue); // Create a new instance of Employee with the id testValue
  expect(e.id).toBe(testValue); // Verify that the id property of the Employee instance is testValue
});

test("Can set email via constructor argument", () => { // Start another test case
  const testValue = "test@test.com"; // Define the testValue variable
  const e = new Employee("Foo", 1, testValue); // Create a new instance of Employee with the email testValue
  expect(e.email).toBe(testValue); // Verify that the email property of the Employee instance is testValue
});

test("Can get name via getName()", () => { // Start another test case
  const testValue = "Alice"; // Define the testValue variable
  const e = new Employee(testValue); // Create a new instance of Employee with the name testValue
  expect(e.getName()).toBe(testValue); // Verify that the getName() method of the Employee instance returns testValue
});

test("Can get id via getId()", () => { // Start another test case
  const testValue = 100; // Define the testValue variable
  const e = new Employee("Foo", testValue); // Create a new instance of Employee with the id testValue
  expect(e.getId()).toBe(testValue); // Verify that the getId() method of the Employee instance returns testValue
});
// Start another test case
test("Can get email via getEmail()", () => { 
     // Define the testValue variable
  const testValue = "test@test.com";
  // Create a new instance of Employee with the email testValue
  const e = new Employee("Foo", 1, testValue); 
  // Verify that the getEmail() method of the Employee instance returns testValue
  expect(e.getEmail()).toBe(testValue); 
});
// Start another test case
test('getRole() should return "Employee"', () => { 
    // Define the testValue variable
  const testValue = "Employee"; 
  // Create a new instance of Employee
  const e = new Employee("Alice", 1, "test@test.com"); 
   // Verify that the getRole() method of the Employee instance returns testValue
  expect(e.getRole()).toBe(testValue);
});
