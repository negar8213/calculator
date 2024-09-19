let $ = document
let buttons = $.querySelectorAll('.button')
let inputElem = $.querySelector('input')
let currentInput = ''

buttons.forEach(function(button){
    // console.log(button)
    button.addEventListener('click', function(){
        if(button.innerHTML == '='){
            solve()
        }if(button.innerHTML == 'C'){
            clearAll()
        }if(button.innerHTML == 'x'){
            clearItem()
        }else{
            typeNumbers(button.innerHTML)
        }
    })
})

function typeNumbers(value){
    // console.log(value)
    // inputElem.value += value
    if(value != 'C'&& value != 'x'&& value != '='){
        currentInput += value;
        inputElem.value = currentInput;
    }
}

function solve() {
        inputElem.value = eval(currentInput);
        currentInput = inputElem.value;  // ذخیره نتیجه برای استفاده در محاسبات بعدی
}

function clearAll(){
    // console.log(':)')
    inputElem.value = ''
    currentInput = ''
}

function clearItem(){
    // console.log(inputElem.value[inputElem.value.length - 1])
    inputElem.value.replace(inputElem.value[inputElem.value.length - 1] , '')
}