#!/usr/bin/eno node

import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstnumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    messsage: "select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction","Multiplication","Division"],
  },
]);
if (asnwer.operator === "Addition"){
    console.log( asnwer.firstnumber + asnwer.secondnumber);

} else if  (asnwer.operator === "Subtraction"){
  console.log( asnwer.firstnumber - asnwer.secondnumber);

} else if (asnwer.operator === "Multiplication"){
  console.log( asnwer.firstnumber * asnwer.secondnumber)

} else if (asnwer.operator === "Division"){
  console.log( asnwer.firstnumber / asnwer.secondnumber)
}else {
  console.log("please select valid operator");
}


