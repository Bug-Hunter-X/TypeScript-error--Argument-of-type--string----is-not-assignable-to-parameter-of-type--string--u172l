# TypeScript Type Error: Argument of type 'string[]' is not assignable to parameter of type 'string'

This repository demonstrates a common TypeScript error that can be confusing for beginners: passing an array to a function that expects a string.

## The Bug
The `greeter` function expects a single string as an argument. However, the `user` variable is an array of strings.  Calling `greeter(user)` results in a compile-time error because TypeScript correctly identifies a type mismatch.

## The Solution
The solution depends on how you want to handle the array. Here are a few options:

1. **Iterate over the array:** If you need to greet each element in the array, loop through it:

```typescript
for (const name of user) {
  console.log(greeter(name));
}
```

2. **Join the array elements:** If you want to greet the array as a single string:

```typescript
console.log(greeter(user.join(" ")));
```

3. **Modify the function signature:** If the function should accept an array, change its type definition:

```typescript
function greeter(person: string[]): string {
  return "Hello, " + person.join(" ");
}
```

This example highlights the importance of careful type handling in TypeScript. Understanding type mismatches is crucial for writing robust and error-free code.