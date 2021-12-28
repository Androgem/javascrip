let input = prompt('Dog to Human years write - dog ; Human to Dog years write - human');
 if (input === 'dog') {
   let input = prompt ('Write you dog years');
   let dogYears = parseInt(input)
   console.log( ` Your dog has ${dogYears} years`);
   let result = dogToHuman(dogYears);
   alert (` Your dog has ${result} human years`)
     
 }

 else if (input === 'human') {
    let input = prompt ('Write your age');
    let humanYears = parseInt(input)
    console.log( ` You are ${humanYears} years old`);
    let result = humanToDog(humanYears);
    alert (`You have ${result} dog age :)`)
 }


 function dogToHuman (years){
     let dogToHumanYears = years * 7;
     return dogToHumanYears;
 }
 function humanToDog (years) {
     let humanToDogyears = years / 7;
     return humanToDogyears;
 }



 