var n = 0;
var x = 0;

while (n < 3) {
    n++;
    console.log(`x${x} += n${n} = x${x += n}`);
}

/*
while (true) { // loop infinito - EVITAR
    console.log("Olá mundo");
}
*/

// --------------------------------------------------------------------------------------------------------------------------


LABEL --
markloop:
while (theMark === true) {
    facaAlgo();
}
