// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  // Traverse the surveyData array to:
  // Count the number of "Yes" responses,
  // Count the number of "No" responses,
  // Count the number of "Maybe" responses,
  // and output the results in the outputEl.
  let yesCount = 0;
  let noCount = 0;
  let maybeCount = 0;

  for (let i = 0; i < surveyData.length; i++) {
    let response = surveyData[i];
    if (response === "Yes") {
      yesCount++;
    } else if (response === "No") {
      noCount++;
    } else if (response === "Maybe") {
      maybeCount++;
    }
  }
  outputEl.innerHTML = `Survey Data:<br/>Yes (${yesCount}), No (${noCount}), Maybe (${maybeCount})`;
}

function traverseAgeData() {
  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.
  let under18 = 0;
  let between18And35 = 0;
  let between36And65 = 0;
  let above65 = 0;

  for (let i = 0; i < ageData.length; i++) {
    let age = ageData[i];
    if (age < 18) {
      under18++;
    } else if (age >= 18 && age <= 35) {
      between18And35++;
    } else if (age >= 36 && age <= 65) {
      between36And65++;
    } else if (age > 65) {
      above65++;
    }
  }
  outputEl.innerHTML = `Age Data:<br>Under 18 (${under18}), Between 18 and 35 (${between18And35}), Between 36 and 65 (${between36And65}), Above 65 (${above65})`;
}

function traverseNumberData() {
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.

  let evenNum = 0;
  let oddNum = 0;
  for (let i = 0; i < numberData.length; i++) {
    let num = numberData[i];
    if (num % 2 === 0) {
      evenNum++;
    } else {
      oddNum++;
    }
  }

  outputEl.innerHTML = `Even Numbers (${evenNum}), Odd Numbers (${oddNum})`;
}
