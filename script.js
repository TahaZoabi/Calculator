"use strict";

// Creating the display Variable
const display = document.getElementById("display");

// Creating a function to display the input on the display screen
function appendToDisplay(input) {
  display.value += input;
}

// Creating a function to clear the last digit of the display number
function clearLastDigit() {
  display.value = display.value.toString().slice(0, -1);
}

// Creating a function to clear all the display
function clearDisplay() {
  display.value = "";
}

// Creating a function to calculate the input value
function calculate() {
  display.value = eval(display.value);
}
