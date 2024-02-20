function getInputValue(inputId){
    const inputByid = document.getElementById(inputId);
    const inputValue = inputByid.value;
    const input = parseFloat(inputValue);
    return input;


}

function setValue(setAreaValu, area){
    const areaValue = document.getElementById(setAreaValu);
    areaValue.innerText = area;
      
}

function emptyAlert(input1, input2){
    if(isNaN(input1) || isNaN(input2)){
        alert('Input cannot be empty')
        return true;
    }
}

function parallelogramArea(){
    const BaseInput = getInputValue('parallelogram-base');
    const HeightInput = getInputValue('parallelogram-height');
    const nan =  emptyAlert(HeightInput,BaseInput);
   if(nan === true){
    return
   }
    const area = BaseInput * HeightInput;
    setValue('parallelogram-area-value', area)

}

// rhombus area 
function rhombusArea(){
    const d1Input = getInputValue('rhombus-d1');
    const d2Input = getInputValue('rhombus-d2');
    const area = 0.5 * d1Input * d2Input;
    setValue('rhombus-area-value', area)

}
// pentagon area
function pentagonArea(){
    const pInput = getInputValue('pentagon-p');
    const bInput = getInputValue('pentagon-b');
    const area = 0.5 * pInput * bInput;
    setValue('pentagon-area-value', area);

}
// ellipse area
function ellipseArea(){
    const aInput = getInputValue('ellipse-a');
    const bInput = getInputValue('ellipse-b');
    const area = 3.1416 * aInput * bInput;
    setValue('ellipse-area-value', area);

}


