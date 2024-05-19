function processArray(arr) {
  return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

function formatArrayStrings(strings, numbers) {
  return strings.map((str, index) => {
    if (numbers[index] % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}
module.exports = { processArray, formatArrayStrings };

const numbers = [5, 18, 27, 78, 100, 300, 500];
const processedNumbers = processArray(numbers);

const strings = ["the", "graveyard", "is", "where", "the", "opps", "stay"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);

console.log("Processed Numbers:", processedNumbers);
console.log("Formatted Strings:", formattedStrings);
