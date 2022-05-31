export function secondsToMinutes(seconds) {
  let minutesField = Math.floor(seconds / 60);
  let secondsField = seconds % 60;
  if (secondsField < 10) {
    secondsField = '0' + secondsField;  
  }

  return minutesField + ':' + secondsField;
}