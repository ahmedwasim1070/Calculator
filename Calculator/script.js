let display = document.getElementById('display');

function appendToDisplay(value){
    display.value +=value;
}
function clearDisplay(value){
    display.value = '';
}

function calculate() {
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value='Error';
    }
}

function backspace(){

    let currentValue=display.value;

    let newValue = currentValue.substring(0,currentValue.length -1);

    display.value=newValue;
}
