let loop = " ";
    for (let i = 1; i < 21; i++) {
        if (i % 2 === 0) {
            loop = loop + i + "\n"; }
        else if ( i % 2 !== 0) {
            loop = loop + i + " " }
        
        }
console.log(loop);
