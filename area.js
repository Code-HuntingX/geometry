function triangleArea() {
   const triangleBaseInput = document.getElementById('triangle-base');
   const triangleHeightInput = document.getElementById('triangle-height');
   const baseValue = triangleBaseInput.value;
   const base = parseFloat(baseValue);

   const heightValue = triangleHeightInput.value;
   const height = parseFloat(heightValue);
   const triangleAreaValue = document.getElementById('triange-area-value');
   triangleAreaValue.innerText = 0.5 * base * height;
}

function rectangleArea() {
   const rectangleWidthInput = document.getElementById('rectangle-width')
   const rectangleLengthInput = document.getElementById('rectangle-length')
   const rectangleWithValue = rectangleWidthInput.value;
   const width = parseFloat(rectangleWithValue);
   const rectangleLengthValue = rectangleLengthInput.value;
   const length = parseFloat(rectangleLengthValue);

   if (isNaN(width) || isNaN(length)) {
      return alert("Input can't be empty")
   }

   const rectangleAreaValue = document.getElementById('rectangle-area-value')
   const area = rectangleAreaValue.innerText = width * length;


   const setName = document.getElementById('r-name').textContent;
   const setResult = document.getElementById('set-result')
   const p = document.createElement('p');
   p.innerText = setName + ' ' + 'Area:' + ' ' + area + 'cm²' + ' ' + 'or' + ' ' + area / 100 + 'm²';
   setResult.appendChild(p)
  

}