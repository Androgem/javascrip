    function bigString (array) {
        let string = " "
        for (let element of array) {
            string = string + element + " "
        }
    return string;
    }


let array = ['My', 'name', 'is', 'Andrej', 'Stojanovski',]

console.log(bigString(array));