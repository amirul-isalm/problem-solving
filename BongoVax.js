// Each array will be sort by even ages people function
function sortByEven(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (arr[left].age % 2 === 0 && left < right) {
      left++;
    }
    while (arr[right].age % 2 !== 0 && left < right) {
      right--;
      }
      if (left<right) {
          let x = arr[left]
          arr[left] = arr[right]
          arr[right] = x
          left++
          right--
      }
    }
    return arr;
}



// Main function here

function vaxTrail(allPersons) {
  const A = [];
  const B = [];
  const C = [];
  const D = [];

  for (let i = 0; i < allPersons.length; i++) {
    const person = allPersons[i];
    if (20 <= person.age && person.age <= 30 && person.temperature < 100) {
      A.push(person);
    } else if (
      31 <= person.age &&
      person.age <= 40 &&
      person.temperature < 100
    ) {
      B.push(person);
    } else if (
      41 <= person.age &&
      person.age <= 50 &&
      person.temperature < 100
    ) {
      C.push(person);
    } else if (person.temperature >= 100) {
      D.push(person);
    } else {
    }
  }

  return {
    A: sortByEven(A),
    B: sortByEven(B),
    C: sortByEven(C),
    D: sortByEven(D),
  };
}

// Testing here
console.log(
  vaxTrail([
      { name: "Kabir", age: 36, temperature: 99 },
      { name: "Kat", age: 41, temperature: 98 },
      { name: "Sabnaj", age: 51, temperature: 101 },
      { name: "Rahul", age: 37, temperature: 99 },
      { name: "sunil", age: 21, temperature: 98 },
      { name: "Biplap", age: 22, temperature: 98},
    { name: "Paul", age: 42, temperature: 98 },
    { name: "Nayem", age: 50, temperature: 100 },
  ])
);
