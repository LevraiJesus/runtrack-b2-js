function myIsInString(haystack, needle) {
    return haystack.includes(needle);
}

console.log(myIsInString("hello world", "llo"));
console.log(myIsInString("hello world", "rele"));
