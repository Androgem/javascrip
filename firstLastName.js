let firstName = ['Michael', 'Elon', 'Jordan','Scoty'];
let lastName = ['Jordan', 'Musk', 'Belfort','Pippen'];
let firsLastName = [];

    function firsLast (firstName, lastName) {
        for (i = 0; i < firstName.length; i++) {
            firsLastName.push(`${i+1}. ${firstName[i]} ${lastName[i]}`)
            console.log(firsLastName)

        }
        return firsLastName
        
    }

firsLast(firstName, lastName);