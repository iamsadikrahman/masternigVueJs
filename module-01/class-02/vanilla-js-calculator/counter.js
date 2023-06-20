import { Calculator } from "./calculator.js";

export function setUpButtons() {
  document.getElementById("add").addEventListener("click", function () {
    // const x = document.getElementById("x").value;
    // const y = document.getElementById("y").value;
    // const result = Calculator.add(x, y);
    // console.log(result);
    // document.getElementById("result").value = result;

    Calculator.calculate("x", "y", "add");
  });

  document.getElementById("sub").addEventListener("click", function () {
    // const x = document.getElementById("x").value;
    // const y = document.getElementById("y").value;
    // const result = Calculator.sub(x, y);
    // console.log(result);
    // document.getElementById("result").value = result;
    Calculator.calculate("x", "y", "sub");
  });

  document.getElementById("mul").addEventListener("click", function () {
    // const x = document.getElementById("x").value;
    // const y = document.getElementById("y").value;
    // const result = Calculator.mul(x, y);
    // console.log(result);
    // document.getElementById("result").value = result;
    Calculator.calculate("x", "y", "mul");
  });

  document.getElementById("div").addEventListener("click", function () {
    // const x = document.getElementById("x").value;
    // const y = document.getElementById("y").value;
    // const result = Calculator.div(x, y);
    // console.log(result);
    // document.getElementById("result").value = result;
    Calculator.calculate("x", "y", "div");
  });
}
