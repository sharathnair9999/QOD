const is31OrNot = (givenMonth) => {
  switch (givenMonth) {
    case "January" ||
      "March" ||
      "May" ||
      "July" ||
      "August" ||
      "October" ||
      "December":
      return "Yes It has 31 days";
    case "February" || "April"||"June"||"September"||"November":
      return "No it doesn't have 31 days";
    default : 
    return "Enter Valid Month"
  }

  return true;
};

console.log(is31OrNot("February"));
