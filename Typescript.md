 ### This module demonstrates basic TypeScript concepts including variables, loops, and functions.
 **Variables:**
  - `let` and `const` are used to declare variables.
  - `let` allows re-assignment while `const` does not.
  - Type annotations can be used to specify the type of a variable.
 **Loops:**
  - `for` loop is used to iterate over a sequence of values.
  - `while` loop continues to execute as long as the condition is true.
  - `for...of` loop iterates over iterable objects like arrays.
  - `for...in` loop iterates over the properties of an object.
 
 **Functions:**
  - Functions can be declared using the `function` keyword.
  - Arrow functions provide a shorter syntax and do not have their own `this`.
  - Functions can have typed parameters and return types.
 
**Example:**
  ```typescript
  const greeting: string = "Hello, TypeScript!";
  for (let i: number = 0; i < 5; i++) {
      console.log(greeting);
  }
  ```
