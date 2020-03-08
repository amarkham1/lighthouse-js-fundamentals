function ageCalculator(name, yearOfBirth, currentYear) {
  if (name === "" || yearOfBirth > currentYear) {
    return "incorrect usage";
  }
  return name + " is " + (currentYear - yearOfBirth) + " years old.";
}

console.log(ageCalculator("Julie", 1983, 2015));
console.log(ageCalculator("",2013, 2009));