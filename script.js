// ### Task 1:
// Make this work (repeat 3 times the contents of an array):
// ```javascript
// repeat([1,2,3]) //[1,2,3,1,2,3,1,2,3]

const repeat = (x) => {
	let repeatArray = new Array(3).fill(x).flat();
	console.log(repeatArray);
};
repeat([1, 2, 3]);

// ### Task 2:
// Make this work (no vowels, lowercase except the first letter):
// ```javascript
// reformat("liMeSHArp DeveLoper TEST") //Lmshrp dvlpr tst

const removeVowels = (str) => {
	return str.replace(/[aeiou]/gi, "");
};
const reformat = (removeVowels) => {
	console.log(
		removeVowels.charAt(0).toUpperCase() + removeVowels.slice(1).toLowerCase()
	);
};
reformat(removeVowels("liMeSHArp DeveLoper TEST"));

// Task 3 (optional, for bonus points):
// Make this work (without using any built in functions, only a for loop, return the next binary number in a string or as an array)
let nextGreater = (num) => {
	let j = num.length;
	let i;
	for (i = j - 1; i >= 0; i--) {
		if (num[i] == "0") {
			num = num.substring(0, i) + "1" + num.substring(i + 1);
			break;
		} else {
			num = num.substring(0, i) + "0" + num.substring(i + 1);
		}
	}

	if (i < 0) {
		num = "1" + num;
	}

	return num;
};

console.log(nextGreater("11"));
