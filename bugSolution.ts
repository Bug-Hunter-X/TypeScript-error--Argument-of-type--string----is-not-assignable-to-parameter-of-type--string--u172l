function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Iterate over the array
for (const name of user) {
  console.log(greeter(name));
}

// Solution 2: Join the array elements
console.log(greeter(user.join(" ")));

// Solution 3: Modify the function signature (if appropriate)
function greeterArray(person: string[]): string {
  return "Hello, " + person.join(', ');
}
console.log(greeterArray(user));