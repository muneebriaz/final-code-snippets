let arr = [1, 0, 100, 10, 5, -1, 100, 5, 0, 200, 7, 3445, 26, 26, 26, 100, 0, 2, -1, -1, -1, 2, 11]

// function duplicates(elements){
//   let dupElements = []
  
//   elements.forEach((index, elem) => {
//     if(elements.indexOf(elem) && index !== elements.indexOf(elem) ) {
//       dupElements.push(elem)
//     }
//   })
//   return dupElements
// }


// console.log(duplicates(arr))


function duplicates(arrayElems){

  let duplicateElements = [];
  
  let mapObject = {}
  
   console.log(arrayElems)
   
   for (let i = 0; i < arrayElems.length; i++) {
     if(!mapObject[arrayElems[i]]){
         mapObject[arrayElems[i]] = 1
      }else{
        mapObject[arrayElems[i]] = mapObject[arrayElems[i]] + 1
    }
  }
//   console.log(typeof mapObject)
  
  for (let key in mapObject){
    if(mapObject[key] > 1) {
      duplicateElements.push(key)
    }
  }
  return duplicateElements;  
  
}

console.log(duplicates(arr))
