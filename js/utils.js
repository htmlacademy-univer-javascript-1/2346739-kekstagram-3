export function getRandomInteger(min, max) {
    // взял отсюда https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return (Math.random() * (max - min) + min) | 0;
}

export function strSizeCheck(str, max) {
  return str.length <= max;
}

export function isEscapeKey(evt) {
  return evt.key === 'Escape';
}