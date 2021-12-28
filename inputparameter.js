function findParameter (input) {
    let parameter = typeof input
    return parameter
}
 
console.log(`Type of input is ${findParameter(1<2)}`)
console.log(`Type of input is ${findParameter('number')}`)
console.log(`Type of input is ${findParameter()}`)
console.log(`Type of input is ${findParameter(null)}`)
console.log(`Type of input is ${findParameter(1993)}`)
