var test1 = 'ABBA';
var test2 = "mosdsm";
var test3 = "deleveled";
var test4 = "ABCA";

function checkPalindrome(str) {
	if (!str) {
		return false;
	} else if (str.length < 2) {
		return false;
	} else {
		var high = str.length - 1;

		for (var i = 0; i < (str.length / 2); i++) {
			if (str[i] !== str[high - i]) {
				return false;
			}
		}

		return true;
	}

	return true;
}


console.log(checkPalindrome(test1));
console.log(checkPalindrome(test2));
console.log(checkPalindrome(test3));
console.log(checkPalindrome(test4));