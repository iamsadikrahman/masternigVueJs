const Calculator = {
  add(x, y) {
    return parseInt(x) + parseInt(y);
  },
  sub(x, y) {
    return x - y;
  },
  mul(x, y) {
    return x * y;
  },
  div(x, y) {
    return x / y;
  },

  // Dynamic function for this calculator. So, counter.js code has been shorted.

  calculate(n1element, n2element, operation) {
    const x = document.getElementById(n1element).value;
    const y = document.getElementById(n2element).value;

    let result = 0;

    if ("add" == operation) {
      result = this.add(x, y);
    } else if ("sub" == operation) {
      result = this.sub(x, y);
    } else if ("mul" == operation) {
      result = this.mul(x, y);
    } else if ("div" == operation) {
      result = this.div(x, y);
    }
    document.getElementById("result").value = result;
  },
};

export { Calculator };
