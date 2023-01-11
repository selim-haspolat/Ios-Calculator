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
    process.innerText += x.target.innerText;
    console.log(process);
    console.log(result);
  });
});

Array.from(operators).forEach((o) => {
  o.addEventListener("click", (i) => {
    process.innerText += i.target.innerText;
    if (
      Array.from(operators).some(
        (v) => v.innerText == process.innerText[process.innerText.length - 2]
      )
    ) {
      //*#1
      // process.innerText = process.innerText.replaceAll(
      //   process.innerText[process.innerText.length - 2],
      //   ""
      // );
      //* #2
      process.innerText = process.innerText.slice(0,process.innerText.length -2) + process.innerText.slice(process.innerText.length -1)
    }
  });
});

ac.addEventListener("click", () => {
  process.innerText = "";
  result.innerText = "";
});

equal.addEventListener("click", (e) => {
  c = process.innerText.toString();
  result.innerText = eval(c);
  process.innerText = "";
});

plusMinus.addEventListener("click",() => {
  process.innerText = eval(process.innerText * -1)
})

percent.addEventListener("click",() => {
    process.innerText += " / 100 *"
})