// Write your code in this file!

function scuberGreetingForFeet(num) {
  if (num <= 400) {
    return 'This one is on me!';
  } else if (num > 2000 && num < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (num > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(str) {
  if (str == 'NYC') {
    return "Ok, sounds good.";
  } else if ('Pittsburg') {
    return 'No go.';
  }
}

function switchOnCharmFromTip (str) {
  if (str === 'generous') {
    return 'Thank you so much.';
  } else if (str === 'not as generous' ) {
    return 'Thank you.';
  } else {
    return 'Bye.';
  }
}
