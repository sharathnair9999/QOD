// number of vowels and consonants in a string
// const str = "Bookkeeper"
// Output : {"Vowels" :5, "Consonants":5}

const str = "Bookkeeper";

const isVowel = (c) => {
  switch (c) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
      return true;
    default:
      return false;
  }
};


const countVowelsAndConsonants = (str) => {
  const strChars = str.split("");
  const ans = strChars.reduce(
    (acc, curr) =>
      isVowel(curr)
        ? { ...acc, consonants: acc.consonants + 1 }
        : { ...acc, vowels: acc.vowels + 1 },
    { vowels: 0, consonants: 0 }
  );
  return ans;
};

console.log(countVowelsAndConsonants(str));
