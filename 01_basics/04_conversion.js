const gameName = new String ('aman-is-bad-boys')
console.log(gameName[0]);

console.log(gameName.charAt(5));
// to access an individual character in a string

console.log(gameName.length); 
// to access the length of the string

console.log(gameName.indexOf('b'));
// to access the index of the string

const newString = gameName.substring(0, 7)
console.log(newString);
// The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

const anotherString = gameName.slice(3, 4);
console.log(anotherString);
// The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

const newStringOne = "   ram    "
console.log(newStringOne.trim());
// The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

const url = "https://aman.com/aman%20pandey"
console.log(url.replace('%20', '-'));








