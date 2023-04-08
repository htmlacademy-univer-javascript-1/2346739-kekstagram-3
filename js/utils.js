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

const isEscKey = (evt) => evt.key === 'Escape';


const numberDeclination = (num, nominative, genitiveSingular, genitivePlural) => {
  const hundredths = num % 100;
  if (hundredths <= 4 || hundredths > 20) {
    const tenths = num % 10;
    if (tenths === 1) {
      return nominative;
    }
    if (tenths >= 2 && tenths <= 4) {
      return genitiveSingular;
    }
  }
  return genitivePlural;
};

export { isEscKey, numberDeclination };