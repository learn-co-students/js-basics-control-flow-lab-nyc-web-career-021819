// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let output
  if (someValue <= 400) {
    output = 'This one is on me!'
  }
  else if (1999 < someValue && someValue < 2500) {
    output = 'I will gladly take your thirty bucks.'
  }
  else if (someValue > 2500) {
    output = 'No can do.'
  }
  return output
}

function ternaryCheckCity(city) {
  let output
  if (city === 'NYC') {
    output = 'Ok, sounds good.'
  }
  else if (city ==='Pittsburgh') {
    output = 'No go.'

  }
  return output
}

function switchOnCharmFromTip(tip) {
  let output
  if (tip === 'generous') {
    output = 'Thank you so much.'
  }
  else if (tip ==='not as generous') {
    output = 'Thank you.'
  }
  else if (tip === 'thanks for everything'){
    output = 'Bye.'
  }
  return output

}
