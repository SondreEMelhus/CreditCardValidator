
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Add your functions below:
//Checks whether a given cardnumber is valid
//Returns a boolean value representing wheter a cardnumber is valid
function validateCred (array) {
  let sum = 0;
  let currentNum = 0;
  let counter = 0;

  for (let i = array.length - 2; i >= 0; i--) {
    if (counter % 2 == 0) {
      currentNum = array [i] * 2;
      if (currentNum > 9) {
        currentNum -= 9;
        sum += currentNum;
        counter += 1; 
      } else {
        sum += currentNum;
        counter += 1
      }
    } else {
      currentNum = array [i];
      sum += currentNum;
      counter += 1;
    }
  }

  sum += array [array.length - 1];

  if (sum % 10 == 0) {
    return true;
  } else {
    return false;
  }
}

//Checks through the nested array for which card numbers are invalid
//Returns an array containing all the invalid cardnumbers
function findInvalidCards (nestedArray) {
  
  let invalidCards = [];
  let x = 0;

  for(let i = 0; i < nestedArray.length; i++) {
    if (!validateCred(nestedArray[i])){
      invalidCards [x] = nestedArray [i];
      x++;
    }
  }
  return invalidCards;
}

//Checks what company issued a card with invalid cardnumber
//Returns an array containing one instance of each company, 
//and at what index this company had an invalid card
function idInvalidCardCompanies (invalidCards) {
  let companies = [];
  let x = 0;

  for (let i = 0; i < invalidCards.length; i++) {
    if (invalidCards [i] [0] == 3) {
      if (!companies.includes('American Express')) {
        console.log(`Index ${i}, American Express`);
        companies [x] = 'American Express';
        x++;
      } else {
        x++;
      }
    } else if (invalidCards [i] [0] == 4) {
      if (!companies.includes('Visa')) {
        console.log(`Index ${i}, Visa`);
        companies [x] = 'Visa';
        x++;
      } else {
        x++;
      }
    } else if (invalidCards [i] [0] == 5) {
      if (!companies.includes('Mastercard')) {
        console.log(`Index ${i}, Mastercard`);
        companies [x] = 'Mastercard';
        x++;
      } else {
        x++;
      }
    } else if (invalidCards [i] [0] == 6) {
      if (!companies.includes('Discover')) {
        console.log(`Index ${i}, Discover`);
        companies [x] = 'Discover';
        x++;
      } else {
        x++;
      }
    } else {
      console.log(`Card at index ${x}, company not found`);
      x++;
    }
  }
  console.log("");
  return companies;
}

//Test ValidateCred
/*
console.log(`${valid1} is valid card number: ${validateCred (valid1)}`);
console.log(`${valid2} is valid card number: ${validateCred (valid2)}`);
console.log(`${valid3} is valid card number: ${validateCred (valid3)}`);
console.log(`${valid4} is valid card number: ${validateCred (valid4)}`);

console.log(`${invalid1} is valid card number: ${validateCred (invalid1)}`);
console.log(`${invalid2} is valid card number: ${validateCred (invalid2)}`);
console.log(`${invalid3} is valid card number: ${validateCred (invalid3)}`);
console.log(`${invalid4} is valid card number: ${validateCred (invalid4)}`);
*/

//Test findInvalidCards
//console.log(findInvalidCards(batch));

//Test idInvalidCardCompanies
//console.log(idInvalidCardCompanies(findInvalidCards(batch)));
