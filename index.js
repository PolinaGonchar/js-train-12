// Task: 1
/**
 * The function `createDictionary` creates a dictionary based on an array of key-value pairs.
 * entries - An array containing key-value pairs.
 * Returns - The created dictionary (Map).
 */
function createDictionary(entries) {
  let map = new Map();
  entries.forEach(([value, key]) => {
    map.set(key, value);
  });
  return map;
}

// Example usage of the createDictionary function
console.log("Task: 1 ==============================");

console.log(
  createDictionary([
    ["apple", "jabłko"],
    ["banana", "banan"],
    ["orange", "pomarańcza"],
  ])
);
// Output:
// Map(3) {
//   'apple' => 'jabłko',
//   'banana' => 'banan',
//   'orange' => 'pomarańcza'
// }

// Task: 2
/**
 * The function `convertMapToObject` takes a dictionary (Map) and converts it to an object.
 * The object's keys become the keys of the dictionary, and the object's values are the corresponding values from the dictionary.
 *
 * map - The dictionary to be converted.
 *
 * Returns - An object containing the keys and values from the input dictionary.
 */
function convertMapToObject(map) {
  let newObject = {};
  for (let [key, value] of map) {
    newObject[key] = value;
  }
  return newObject;
}

// Example usage of the convertMapToObject function
console.log("Task: 2 ==============================");

let someMap = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
]);

console.log(convertMapToObject(someMap));
// Output: { name: 'John', age: 30, city: 'New York' }

// Task: 3
/**
 * The function `setValue` sets the value for a given key in the dictionary.
 * dictionary - The dictionary in which the value needs to be changed.
 * key - The key for which the value needs to be set.
 * value - The new value to assign to the key.
 */
function setValue(dictionary, key, value) {
  if (dictionary.has(key)) {
    dictionary.set(key, value);
  } else {
    dictionary.set(key, key);
  }
  return dictionary;
}

// Example usage of the setValue function
console.log("Task: 3 ==============================");

// Setting a new value for the key "banana"
console.log(
  setValue(
    new Map([
      ["apple", "jabłko"],
      ["banana", "banan"],
      ["orange", "pomarańcza"],
    ]),
    "banana",
    "nowy banan"
  )
);
// Output:
// Map(3) {
//   'apple' => 'jabłko',
//   'banana' => 'nowy banan',
//   'orange' => 'pomarańcza'
// }

// Task: 4
/**
 * The function `deleteKey` removes a key and its corresponding value from the dictionary.
 * dictionary - The dictionary from which the key needs to be removed.
 * key - The key that needs to be removed.
 * Returns - true if the key was successfully removed, or false if the key was not found.
 */
function deleteKey(dictionary, key) {
  if (dictionary.has(key)) {
    dictionary.delete(key);
    return true;
  } else {
    return false;
  }
}

// Example usage of the deleteKey function
console.log("Task: 4 ==============================");

console.log(
  deleteKey(
    new Map([
      ["apple", "jabłko"],
      ["banana", "banan"],
      ["orange", "pomarańcza"],
    ]),
    "banana"
  )
); // true

// Task: 5
/**
 * The function `getKeysStartingWith` returns an array of keys from the dictionary that start with a given letter.
 * dictionary - The dictionary whose keys are checked.
 * letter - The letter that the keys must start with.
 * Returns - An array of keys that start with the specified letter.
 */
function getKeysStartingWith(dictionary, letter) {
  let keysStartingWithLetter = [];
  for (let key of dictionary.keys()) {
    if (key.startsWith(letter)) {
      keysStartingWithLetter.push(key);
    }
  }
  return keysStartingWithLetter;
}

// Example usage of the getKeysStartingWith function
console.log("Task: 5 ==============================");

// Getting keys that start with the letter "g"
console.log(
  getKeysStartingWith(
    new Map([
      ["apple", "jabłko"],
      ["banana", "banan"],
      ["orange", "pomarańcza"],
      ["grape", "winogrono"],
      ["pear", "gruszka"],
    ]),
    "g"
  )
); // Output: [ 'grape' ]

// Task: 6
/**
 * The function `addKeyValuePairs` adds key-value pairs to the dictionary with a check for the uniqueness of the key.
 * It also tracks the number of added and rejected keys.
 * dictionary - The dictionary to which the pairs need to be added.
 * entries - An array of key-value pairs that need to be added.
 * Returns - An object containing the updated dictionary, the number of added, and rejected keys.
 */
function addKeyValuePairs(dictionary, entries) {
  let added = 0;
  let rejected = 0;
  entries.forEach(([key, value]) => {
    if (!dictionary.has(key)) {
      dictionary.set(key, value);
      added++;
    } else {
      rejected++;
    }
  });
  return { dictionary, added, rejected };
}

console.log("Task: 6 ==============================");

console.log(
  addKeyValuePairs(
    new Map([
      ["user1", { name: "John", age: 24 }],
      ["user2", { name: "Emma", age: 28 }],
    ]),
    [
      ["user3", { name: "Bob", age: 33 }],
      ["user2", { name: "Alice", age: 25 }],
    ]
  )
);
// Output: {
//   dictionary: Map(3)
//   { 'user1' => { name: 'John', age: 24 },
//   'user2' => { name: 'Emma', age: 28 },
//   'user3' => { name: 'Bob', age: 33 } },
//   added: 1,
//   rejected: 1
// }

// Task: 7
/**
 * The function `transformDictionary` converts a dictionary into an object that contains arrays of keys, values, and key-value pairs.
 * dictionary - The dictionary that needs to be converted.
 * Returns - An object containing arrays of keys, values, and key-value pairs.
 */
function transformDictionary(dictionary) {
  let keys = [],
    values = [],
    entries = [];
  for (let key of dictionary.keys()) {
    keys.push(key);
  }
  for (let value of dictionary.values()) {
    values.push(value);
  }
  for (let entry of dictionary.entries()) {
    entries.push(entry);
  }
  return {
    keys,
    values,
    entries,
  };
}

console.log("Task: 7 ==============================");

console.log(
  transformDictionary(
    new Map([
      ["car", "auto"],
      ["bus", "autobus"],
      ["bicycle", "rower"],
    ])
  )
);
// Output: {
//    keys: [ 'car', 'bus', 'bicycle' ],
//    values: [ 'auto', 'autobus', 'rower' ],
//    entries: [
//     [ 'car', 'auto' ],
//     [ 'bus', 'autobus' ],
//     [ 'bicycle', 'rower' ]
//   ]
// }

// Task: 8
/**
 * The `checkPresence` function checks the presence of specified keys in the dictionary.
 * dictionary - The dictionary in which to check the keys.
 * keys - The array of keys to be checked.
 * Returns - An array of boolean values: true if the key is present in the dictionary, and false if the key is absent.
 */
function checkPresence(dictionary, keys) {
  let presence = [];
  keys.forEach((key) => {
    presence.push(dictionary.has(key));
  });
  return presence;
}

console.log("Task: 8 ==============================");

console.log(
  checkPresence(
    new Map([
      ["car", "auto"],
      ["chair", "krzesło"],
      ["computer", "komputer"],
    ]),
    ["car", "book", "chair"]
  )
);
// Output: [true, false, true]

// Task: 9
/**
 * The `getFilteredDictionarySize` function returns the number of elements in the dictionary whose values match the given filter.
 * dictionary - The dictionary whose size needs to be obtained.
 * filter - The filtering function. This function takes a key-value pair and returns true if the pair matches the filter, or false otherwise.
 * Returns - The size of the filtered dictionary.
 */
function getFilteredDictionarySize(dictionary, filter) {
  let filteredDictionary = new Map();
  for (let [key, value] of dictionary.entries()) {
    if (filter(key, value)) {
      filteredDictionary.set(key, value);
    }
  }
  return filteredDictionary.size;
}

console.log("Task: 9 ==============================");

console.log(
  getFilteredDictionarySize(
    new Map([
      ["Kyiv", 2884000],
      ["Kharkiv", 1446000],
      ["Odesa", 993120],
      ["Dnipro", 990724],
      ["Lviv", 721301],
    ]),
    (key, value) => value > 1000000
  )
);
// Output: 2, since only two cities have a population greater than 1 million

// Task: 10
/**
 * The `sortByValues` function sorts the dictionary by values from highest to lowest.
 * dictionary - The dictionary that needs to be sorted.
 * Returns - The sorted dictionary.
 */
function sortByValues(dictionary) {
  let entries = [...dictionary.entries()];
  entries.sort((a, b) => b[1] - a[1]);
  return new Map(entries);
}

console.log("Task: 10 ==============================");

console.log(
  sortByValues(
    new Map([
      ["Harry Potter and the Philosopher's Stone", 120000000],
      ["The Little Prince", 200000000],
      ["The Hobbit", 100000000],
      ["And Then There Were None", 100000000],
      ["Dream of the Red Chamber", 100000000],
    ])
  )
);
// Output: Map {
// 'The Little Prince' => 200000000,
// 'Harry Potter and the Philosopher's Stone' => 120000000,
// 'The Hobbit' => 100000000,
// 'And Then There Were None' => 100000000,
// 'Dream of the Red Chamber' => 100000000 }

// Task: 11
/**
 * The `resetDictionary` function checks the number of elements in the dictionary, and if it exceeds the specified limit, clears the dictionary.
 * dictionary - The dictionary to be checked and possibly cleared.
 * maxSize - The maximum allowable number of elements in the dictionary.
 * Returns - true if the dictionary was cleared, or false otherwise.
 */
function resetDictionary(dictionary, maxSize) {
  if (dictionary.size > maxSize) {
    dictionary.clear();
    return true;
  } else {
    return false;
  }
}

console.log("Task: 11 ==============================");

console.log(
  resetDictionary(
    new Map([
      ["Kyiv", 2884000],
      ["Kharkiv", 1446000],
      ["Odesa", 993120],
      ["Dnipro", 990724],
      ["Lviv", 721301],
    ]),
    3
  )
);
// Output: true, since the dictionary had 5 elements, which is more than maxSize = 3

// Task: 12
/**
 * The `convertDictionaryToSet` function takes a dictionary and converts it into a set.
 * The set values are the keys of the dictionary, where string keys are converted to uppercase,
 * and numeric keys are increased by 1.
 *
 * dictionary - The dictionary to be converted.
 *
 * Returns - A set containing the dictionary keys in modified form.
 */
function convertDictionaryToSet(dictionary) {
  let newSet = new Set();
  for (let key of dictionary.keys()) {
    if (typeof key === "string") {
      newSet.add(key.toUpperCase());
    } else if (typeof key === "number") {
      newSet.add(key + 1);
    }
  }
  return newSet;
}

// Example of using the convertDictionaryToSet function
console.log("Task: 12 ==============================");

let mixedDictionary = new Map([
  ["apple", "red"],
  ["banana", "yellow"],
  [1, "one"],
  [2, "two"],
]);

console.log(convertDictionaryToSet(mixedDictionary));
// Output: Set { 'APPLE', 'BANANA', 2, 3 }

// Task: 13
/**
 * The `convertSetToDictionary` function takes a set and converts it into a dictionary.
 * The set elements become the dictionary keys, and the values are the character codes of the first characters of these elements.
 *
 * set - The set to be converted.
 *
 * Returns - A dictionary that contains the set elements as keys and their character codes as values.
 */
function convertSetToDictionary(set) {
  let newDictionary = new Map();
  for (let item of set) {
    newDictionary.set(item, item.charCodeAt(0));
  }
  return newDictionary;
}

// Example of using the convertSetToDictionary function
console.log("Task: 13 ==============================");

let someSet = new Set(["apple", "banana", "1", "2"]);

console.log(convertSetToDictionary(someSet));
// Output: Map { 'apple' => 97, 'banana' => 98, '1' => 49, '2' => 50 }
