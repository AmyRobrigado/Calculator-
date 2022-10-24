"use strict";

window.onload = init;

function init()
{
const number1Field = document.getElementById("number1Field");
const number2Field = document.getElementById("number2Field");
const addBtn = document.getElementById(addBtn);
const subBtn= document.getElementById(subBtn);
const mulBtn = document.getElementById(mulBtn);
const divBtn = document.getElementById(divBtn);

addBtn.onclick = addBtnOnClick;
subBtn.onclick = subBtnOnClick;
mulBtn.onclick = mulBtnOnClick;
divBtn.onclick = divBtnOnClick;
}

/* Add Button */
function addBtnOnClick()
{
  const number1Field = document.getElementById("number1Field");
  const number2Field = document.getElementById("number2Field");

  let num1 = Number(number1Field.value);
  let num2 = Number(number2Field.value);

  let answer = num1 + num2;

  const answerField = document.getElementById("answerField");

  answerField.value = answer;



}

