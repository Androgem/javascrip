alert('Calculate the Area of Circle');
console.log('Area of Circle');
let pi = 3.14159265359;
let input = window.prompt('Input your radius value');
let r = parseInt(input)
let AreaOfCircle = pi*(r*r);
     if ( isNaN(r)) {
              alert('Write a number!')}
     else    {alert('The area of Circle is '+ AreaOfCircle)};
console.log('The area of Circle is '+ AreaOfCircle);
