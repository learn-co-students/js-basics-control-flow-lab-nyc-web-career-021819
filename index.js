// Write your code in this file!

function scuberGreetingForFeet(number){
  switch (true){
    case number < 400:
      return "This one is on me!";
      break
    case number > 2000 && number < 2500:
      return "I will gladly take your thirty bucks.";
      break
    case number > 2500:
      return "No can do.";
      break
    }
}

function ternaryCheckCity(city){
  let checkResponse = city === "NYC" ? "Ok, sounds good." : "No go."
  return checkResponse
}

function switchOnCharmFromTip(description){
  switch(description){
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye."
  }
}
