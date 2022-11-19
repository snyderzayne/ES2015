// Quick Question #1
// new Set([1,1,2,2,3,4]) = [1,2,3,4]


// Quick Question #2
// [...new Set("referee")].join("") = "ref"


// Quick Questions #3
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// m = {[1,2,3] => true, [1,2,3] => false}


// hasDuplicate

const hasDuplicate = (arr) => {
    new Set(arr).size !== arr.length
};

function vowelCount(str) {
    let vowelMap = new Map();
    for (let char of str) {
        let lowercaseChar = char.toLowerCase();
        if ('aeiou'.includes(lowercaseChar)) {
            vowelMap.set(lowercaseChar, vowelMap.get(lowercaseChar) + 1)
        } else {
            vowelMap.set(lowercaseChar, 1);
        }
    }
    return vowelMap;
}
