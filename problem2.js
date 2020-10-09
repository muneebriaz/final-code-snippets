let array = [-1000, 1, 0, 100, 10, 5, -1, 100, 5, 0, -200, 7, 3445, 26, 26, -26, 100, 0, 2, -1, -1, -1, 2, 11]


function maxProduct(elements){
  
  let product = 0;
  let values1;
  let values2;
  let values3;

  let sortedArray = elements.sort((a, b) => { return a - b; }); 
  
  let thirdIndex = sortedArray.length - 1; 
  
//   console.log(sortedArray[thirdIndex]);
  
  for (let i = 0; i < sortedArray.length; i++){
       
    for (let j = 0; j < sortedArray.length; j++){
        if (i !== j){
        let  newProd = sortedArray[i] * sortedArray[j] * sortedArray[thirdIndex];
        if(newProd > product) {
          product = newProd;
          value1 = sortedArray[i]
          value2 = sortedArray[j]
          value3 = sortedArray[thirdIndex]
        }
        }
    }
    if(thirdIndex !== 0){
      thirdIndex = thirdIndex - 1;
    }
    
  }
  
    console.log(value1, value2, value3)
  
   return {value1: value1, value2: value2, value3: value3, product: product};
  
}

console.log(maxProduct(array))
