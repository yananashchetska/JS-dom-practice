'use strict';

const allNumbersElements = document.querySelectorAll('.tourists');

const calculateTotalValue = (listOfNumbersElements) => {
  const total = [...listOfNumbersElements].reduce((accum, element) => {

	const touristsText = element.textContent.replace(/,/g, '');
    const touristsNumber = parseInt(touristsText);

    return accum + touristsNumber;
  }, 0);

  return total;
};

const average =
  Math.round(calculateTotalValue(allNumbersElements) / allNumbersElements.length * 100) / 100;

const totalElement = document.querySelector('.total__tourists');

totalElement.textContent = calculateTotalValue(allNumbersElements).toLocaleString('en-US');

const averageElement = document.querySelector('.average__tourists');

averageElement.textContent = average.toLocaleString('en-US');
