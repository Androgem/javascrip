let array = [-10, 2, 40, 'Andrej', 20, 'Marko', null, 100, false, true];
   


function sumOfMinMax (array) {
            for (let i = 0; i < array.length; i++) {
                if (typeof array[i] !== 'number'){
                  let otherType = array[i];
                  console.log(`other type is ${otherType}`);
                  array.splice(i,1);
                  i--;
                  console.log(array);
            
                }

           
            }
              let max = Math.max(...array);
              console.log(`Max number is ${max}`);
              let min = Math.min(...array);
              console.log(`Min number is ${min}`);
 
              let result = max + min
              console.log(`The result is ${result}`);
              return result;
      }
        
   


sumOfMinMax(array)