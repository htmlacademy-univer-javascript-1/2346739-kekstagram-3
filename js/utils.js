export function getRandomInteger(min, max) {
  // взял отсюда https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return (Math.random() * (max - min) + min) | 0;
}

export function strSizeCheck(str, max) {
  return str.length <= max;
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

const isEscapeKey = (evt) => evt.keyCode === 27;

const checkForRepeats = (list) => {
  const containerForСomparison = {};
  for (const element of list) {
    if (containerForСomparison[element]) {
      return true;
    }
    containerForСomparison[element] = 1;
  }
  return false;
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { isEscKey, numberDeclination, isEscapeKey, checkForRepeats, debounce };
