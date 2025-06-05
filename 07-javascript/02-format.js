const formatItems = (input) => {
  // Format each number to 3 decimal places, then join with commas
  return input
    .map((num) => {
      // Handle cases where input might not be a number
      const number = Number(num);
      // Check if it's a valid number
      if (isNaN(number)) return "NaN";
      // Format to exactly 3 decimal places
      return number.toFixed(3);
    })
    .join(", ");
};

console.log(formatItems([1, 4, 17, 26, 41]));
// expected: '1.000, 4.000, 17.000, 26.000, 41.000'
console.log(formatItems([34.0, 12.0, 13.7, 760.1, 10.5]));
// expected: '34.000, 12.000, 13.700, 760.100, 10.500'
console.log(formatItems([235.235778, 1.2346789, 14.7, 97.3, 714.1245678]));
// expected: '235.236, 1.235, 14.700, 97.300, 714.125'
