export default function createFirstName(inputString: string) {
  const indexOfFullStop = inputString.indexOf(".");

  if (indexOfFullStop !== -1) {
    return inputString.substring(0, indexOfFullStop).trim();
  } else {
    return inputString.trim();
  }
}
