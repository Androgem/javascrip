// Generate an array that has all the numbers that are divisible by 3 from 1 to 1000


   

        function  arrayDivBy_3 () {
            let array = [];
            for (let i = 1; i < 1000; i++) {
                
                if (i % 3 == 0) {
                    array.push(i);
                } 
                
            }
            return array;
            
        } 

console.log(arrayDivBy_3())


//  Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000 


        function evenNumDivby_4() {
            let array1 = [];
            for (let i = 1; i < 1000; i++) {
                if (i % 4 == 0) {
                    array1.push(i)
                }
                
            } return array1;
        } 
console.log(evenNumDivby_4());





// Generate an array that has all the numbers that end with the digit 1 from 1 to 1000


        function numWithDigit_1 () {
            let array2 = [];
            for (let i = 1; i < 1000; i++) {
                if ( i % 10 == 1) {
                    array2.push(i)
                }
            }
            return array2;
        }
    
console.log(numWithDigit_1())



// Create a function that cleans an array of any values and leaves only STRINGS

let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
let string = [];
        function cleanArray(test) {
            for (let i of test) {
                if (typeof i == 'string') {
                
                    string.push(i);
                    
            }
        
        }return string;
    }

//console.log(cleanArray(test));


// Create a function that cleans an array of any values and leaves only NUMBERS

let numb = [];
    function cleanArray1(test) {
        for (let i of test) {
            if (typeof i =='number'){
                numb.push(i);
            }
        }
        return numb;
    }

// console.log(cleanArray1(test));

// Create a function that cleans undefined, null, NaN, and "" and leaves all other values 

let otherValue = [];
    function otherValues(test) {
        for (let i of test) {
            if (i){
                otherValue.push(i);
            }
        }
        return otherValue;
    }

// console.log(otherValues(test));



//Random color page
//Create an HTML page
//On every refresh the page should pick a random color and change the background of the page
//The RGB values of the color should be shown in the center of the page on every restart

let body = document.getElementById("body");
let h3 = document.getElementById("colorbackround")
    function changeBackroundColor() {
        let a = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        let c = Math.floor(Math.random()*255);
        body.style.backgroundColor= 'rgb(' + a + ',' + b + ',' + c + ')';
        h3.innerText = ` the rgb color is ${a}, ${b}, ${c}`;

    }

changeBackroundColor();



//Title Generator
//Create 3 inputs:
//Color
//FontSize
//Text
//Create a button for generating titles
//When the button is clicked generate a new h1 element with the color, font size, and text from the inputs
let btn = document.getElementById("btn");
let h1 = document.getElementById("header");

    function generate(){
        let color = document.getElementById("color").value;
        let fontsize = document.getElementById("fontsize").value;
        let text = document.getElementById("text").value;
        h1.innerText = `${color}, ${fontsize}, ${text}`;

    }

btn.onclick = generate;


