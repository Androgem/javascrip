let array = []
array[0] = parseInt(prompt('Write your first number'));
array[1] = parseInt(prompt('Write your second number'));
array[2] = parseInt(prompt('Write your third number'));
array[3] = parseInt(prompt('Write your forth number'));
array[4] = parseInt(prompt('Write your fifth number'));
function sumOfArray(array) {
    let sum = array[0] + array[1] + array[2] + array[3] + array[4]
    alert(`Your summary of values in this array ( ${array} ) is ${sum}`)

    return sum
}



function validateNumber(array) {

    let validNumber = parseInt(array);
    if (isNaN(validNumber)) {
        alert('Write numbers!')
    }

    else[sumOfArray(array)]

}




validateNumber(array);