let num = [10,20,30,40,50]

// function aaa() {
//     for (let i = 0; i < num.length; i++) {
//         console.log(num[i]);
//     }
// } aaa();

function for_in() { // pega as posições dos elementos no arrey
    for ( n in num) {
        console.log (n); // msm coisa do for da function aaa().
    }
} for_in();

function for_of() { // intera diretamente os elementos do arrey
    for (n of num) {
        console.log(n);
    }
} for_of();


function bb() {
    
}