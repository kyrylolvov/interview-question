"use strict";

const outputArray = [];

const insertDot = function (string, position) {
  const modifiedString =
    string.substring(0, position) + "." + string.substring(position);
  return modifiedString;
};

const createArray = function (string, i = 0) {
  while (i + 1 < string.length) {
    i++;
    const arrayItems = insertDot(string, i);
    createArray(arrayItems, i + 1);
    outputArray.push(arrayItems);
  }
};

const generateArray = function (string) {
  createArray(string);
  outputArray.unshift(string);
  console.log(outputArray);
};

generateArray("abc");
