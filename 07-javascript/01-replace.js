const replaceItems = (input) => {
  // Use regular expressions with the 'gi' flags:
  // g - global (replace all occurrences)
  // i - case insensitive
  let result = input.replace(/gold/gi, "SHINY");
  result = result.replace(/wander/gi, "roam");
  return result;
};

console.log(replaceItems("All that is gold does not glitter"));
// expected: 'All that is SHINY does not glitter'
console.log(replaceItems("Wisdom is better than silver or GOLD."));
// expected: 'Wisdom is better than silver or SHINY.'
console.log(replaceItems("Not all those who Wander are lost"));
// expected: 'Not all those who roam are lost'
