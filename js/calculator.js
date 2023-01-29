let isAdd = false; // +
let isSub = false; // -
let isMul = false; // * or x
let isDiv = false; // /
let isMod = false; // %
let result = 0;
let needClear = false;

// function buttonAction(values) {
//   let a1 = document.querySelector('.calc-operation');

//   a1.innerHTML += values;
// }

function reset() {
  document.querySelector('.calc-operation').innerHTML = "";
  document.querySelector('.form-calc').reset();
  document.querySelector('.calc-typed').innerHTML = 0;

  isAdd = false;
  isSub = false;
  isMul = false;
  isDiv = false;
  isMod = false;
}

function specialAction(values) {
  switch (values) {
    case '+':
      isAdd = true;
      // console.log(isAdd);
      document.querySelector('.calc-operation').innerHTML += values;
      document.querySelector('input[name=calc-input]').value += values;
      // document.getElementById("calc-input").value += values; // other way to use
      break;

    case '-':
      isSub = true;
      // console.log(isSub);
      document.querySelector('.calc-operation').innerHTML += values;
      document.querySelector('input[name=calc-input]').value += values;
      break;
    
    case 'x':
      isMul = true;
      // console.log(isMul);
      document.querySelector('.calc-operation').innerHTML += values;
      document.querySelector('input[name=calc-input]').value += values;
      break;

    case '/':
      isDiv = true;
      // console.log(isDiv);
      document.querySelector('.calc-operation').innerHTML += values;
      document.querySelector('input[name=calc-input]').value += values;
      break;

    case '%':
      isMod = true;
      // console.log(isMod);
      document.querySelector('.calc-operation').innerHTML += values;
      document.querySelector('input[name=calc-input]').value += values;
      break;
    
    case '.':
      isAdd = true;
      // console.log(isAdd);
      document.querySelector('.calc-operation').innerHTML += values;
      document.querySelector('input[name=calc-input]').value += values;
      break;

    default:
      if (needClear == true) {
        result = 0;
        document.querySelector('.form-calc').reset();
        document.querySelector('.calc-operation').innerHTML = "";
        
        // Set back to false, you know it will loop
        needClear = false;
      }

      document.querySelector('.calc-operation').innerHTML += values;
      document.querySelector('input[name=calc-input]').value += values;
      break;
  }
}

function count(event) {
  event.preventDefault();

  let input = document.querySelector('input[name=calc-input]').value;
  // console.log(input);
  let output = document.querySelector('.calc-typed');
  
  switch (isAdd) {
    case true:
      let splitArr = input.split("+");
      // console.log(splitArr);

      splitArr.forEach(arrayForEachAdd);
      output.innerHTML = result;

      // Set flag to needClear
      needClear = true;
      isAdd = false;
      break;
  
    default:
      break;
  }
  
  switch (isSub) {
    case true:
      let splitArr = input.split("-");
      // console.log(splitArr);

      splitArr.forEach(arrayForEachSub);
      output.innerHTML = result;

      // Set flag to needClear
      needClear = true;
      isSub = false;
      break;
  
    default:
      break;
  }

  switch (isMul) {
    case true:
      let splitArr = input.split("x");
      // console.log(splitArr);

      splitArr.forEach(arrayForEachMul);
      output.innerHTML = result;

      // Set flag to needClear
      needClear = true;
      isMul = false;
      break;
  
    default:
      break;
  }

  switch (isDiv) {
    case true:
      let splitArr = input.split("/");
      // console.log(splitArr);

      splitArr.forEach(arrayForEachDiv);
      output.innerHTML = result;

      // Set flag to needClear
      needClear = true;
      isDiv = false;
      break;
  
    default:
      break;
  }

  switch (isMod) {
    case true:
      let splitArr = input.split("%");
      // console.log(splitArr);

      splitArr.forEach(arrayForEachMod);
      output.innerHTML = result;

      // Set flag to needClear
      needClear = true;
      isMod = false;
      break;
  
    default:
      break;
  }
}

function arrayForEachAdd(item) {
  result += parseFloat(item);
}

function arrayForEachSub(item, index) {
  if (index == 0) {
    result = item;
  } else {
    result -= parseFloat(item);
  }
}

function arrayForEachMul(item, index) {
  if (index == 0) {
    result = item;
  } else {
    result *= parseFloat(item);
  }
}

function arrayForEachDiv(item, index) {
  if (index == 0) {
    result = item;
  } else {
    result /= parseFloat(item);
  }
}

function arrayForEachMod(item, index) {
  if (index == 0) {
    result = item;
  } else {
    result %= parseFloat(item);
  }
}