function loopyLighthouse(range, multiples, words) {
  let rangeStart = range[0];
  let rangeEnd = range[1];
  let multiple1 = multiples[0];
  let multiple2 = multiples[1];
  let word1 = words[0];
  let word2 = words[1];
  if (range.length !== 2 || multiples.length !== 2 || words.length !== 2 || rangeStart > rangeEnd) {
    return console.log("incorrect arguments");
  }
  for (let i = rangeStart; i <= rangeEnd; i++) {
    if (i % multiple1 === 0 && i % multiple2 !== 0) {
      console.log(word1);
    } else if (i % multiple1 !== 0 && i % multiple2 === 0) {
      console.log(word2);
    } else if (i % (multiple1 * multiple2) === 0) {
      console.log(word1 + word2);
    } else {
      console.log(i);
    }
  }
}

console.log(loopyLighthouse([0, 10], [2, 3], ["Hi", "Ho"]));
