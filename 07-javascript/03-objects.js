let result = {};

const insertItem = (key, value) => {
  result[key] = value; // Add or update the key-value pair
  return key;
};

const deleteItem = (key) => {
  delete result[key]; // Remove the key-value pair
  return key;
};

const lookupItem = (key) => {
  // Return the value if key exists, otherwise return error message
  return key in result ? result[key] : "Item does not exist";
};

const printItems = () => {
  // Get all keys and join them with commas
  return Object.keys(result).join(", ");
};

insertItem("hello", "world");
insertItem("lorem", "ipsum");
insertItem("sit", "amet");
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'ipsum'

deleteItem("lorem");
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'Item does not exist'
