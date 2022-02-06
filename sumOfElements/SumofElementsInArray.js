
let array = [];
let save = document.getElementById("btn");
let reset = document.getElementById("reset");
let div = document.getElementById("div");
let div1 = document.getElementById("div1");
let sum = document.getElementById("sum");

function showArray() {
    if (isNaN((parseInt(document.getElementById("number").value)))) {
        alert('Enter a number!')
        return null
    }
    else {

        array.push(parseInt(document.getElementById("number").value));
        console.log(array);
        document.getElementById("number").value = null

    }
}

function resetArray() {
    array = [];

    console.log(array);
    alert('Your array is empty');
}

function sumOfArray() {
    let summary = 0;
    if (array.length == 0) {
        alert('Enter numbers!')
        return null
    } else {
        for (i = 0; i < array.length; i++) {
            summary += array[i]
        }
        showSummary(summary);
        return summary
    }

}


function disappearDiv() {
    document.getElementById("div1").style.display = "none";
}

function showSummary(summary) {
    div1.innerHTML = `<h4> Your summary is ${summary} </h4> <p>Your array : ${array}</p>`
    // window.setTimeout(disappearDiv, 5000);
}


sum.onclick = sumOfArray;
reset.onclick = resetArray;
save.onclick = showArray;