/* BREAK --
for (let i = 0; i < a.length; i++) {
    if (a[i] === theValue) {
        break;
    }
}
*/

// Exemplo 2: Utilizando break em label -- 

let y = 0;
let z = 0;
labelCancelaLaco: while (true) {
    console.log(`Laço exterior: ${y}`);
    y += 1;
    z = 1;
    while (true) {
        console.log(`Laço interior: ${z}`);
            z += 1;
            if (z === 10 && y === 10) {
                break labelCancelaLaco;
            } else if (z === 10) {
                break;
            }
        }
    }