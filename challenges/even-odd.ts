function evenOrOdd(num ) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Another Syntax
function evenOrOdd2(num) {
  return num % 2 == 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(10));
console.log(evenOrOdd(11));
