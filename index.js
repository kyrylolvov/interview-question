"use strict";

const createArray = function (string) {
  let outputArray = [string[0]];
  for (let i = 1; i < string.length; i++) {
    const copiedArray = outputArray.slice().map((item) => item + ".");
    outputArray = [...outputArray, ...copiedArray].map(
      (item) => item + string[i]
    );
  }
  return outputArray;
};

console.log(createArray("abc"));
