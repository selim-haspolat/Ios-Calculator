let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let screen = document.getElementsByClassName("screen");
let buttons = document.getElementsByClassName("calculate-buttons");
let ac = document.getElementById("ac");
let plus = document.getElementById("plus");
let equal = document.getElementById("equal");
let visibil = document.getElementsByClassName("visibil");
let result = document.getElementById("result");
let process = document.getElementById("process");
let operators = document.getElementsByClassName("operators");
let num = document.getElementsByClassName("number");
let plusMinus = document.getElementById('plus-minus');
let percent = document.getElementById('percent');


Array.from(num).forEach((e) => {
  e.addEventListener("click", (x) => {
    process.innerHTML += x.target.innerHTML;
    console.log(process);
    console.log(result);
  });
});

Array.from(operators).forEach((o) => {
  o.addEventListener("click", (i) => {
    process.innerHTML += i.target.innerHTML;
    if (
      Array.from(operators).some(
        (v) => v.innerHTML == process.innerHTML[process.innerHTML.length - 2]
      )
    ) {
      process.innerHTML = process.innerHTML.replace(
        process.innerHTML[process.innerHTML.length - 2],
        ""
      );
    }
  });
});

ac.addEventListener("click", () => {
  process.innerHTML = "";
});

equal.addEventListener("click", (e) => {
  c = process.innerHTML.toString();
  result.innerHTML = eval(c);
  process.innerHTML = "";
});

plusMinus.addEventListener("click",() => {
  process.innerHTML = eval(process.innerHTML * -1)
})

percent.addEventListener("click",() => {
    process.innerHTML += " / 100 *"
})