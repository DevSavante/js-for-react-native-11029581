const { processArray, formatArrayStrings } = require('./arrayManipulation');


function createUserProfiles(names, processedNames) {
    return names.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: processedNames[index]
        };
    });
}
const names = ["Alice", "Bob", "Charlie", "David"];
const numbers = [2, 3, 4, 5];

const processedNumbers = processArray(numbers);
const modifiedNames = formatArrayStrings(names, processedNumbers);
const userProfiles = createUserProfiles(names, modifiedNames);

console.log(userProfiles);
module.exports = { createUserProfiles };