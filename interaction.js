function onClick() {
    if (emptyInput()) {
      label.textContent = 'Error: one or both inputs are empty.';
      return;
    }
    updateLabel();
  }
  function emptyInput() {
    if (getNumber1() === '' || getNumber2() === '') {
      return true;
    } else {
      return false;
    }
  }
  
  
  function updateLabel() {
    var digit1 = getNumber1();
    var digit2 = getNumber2();
    var sum = parseInt(digit1) + parseInt(digit2);
    label.textContent = `${digit1} + ${digit2}  =  ${sum}`;
  }
  
  function getNumber1() {
    return inputs[0].value;
  }
  function getNumber2() {
    return inputs[1].value;
  }


  let inputs = document.querySelectorAll('input');
  let label = document.querySelector('p');
  let button = document.querySelector('button');
  button.addEventListener('click', onClick);

