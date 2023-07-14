let colocação = 'quarto';

function colocação_string() {
    
    if (colocação === 'Primeiro' || colocação === 'primeiro' ) {
        colocação = 1;
    } else if (colocação === 'Segundo' || colocação === 'segundo' ) {
        colocação = 2;
    } else if (colocação === 'Terceiro' || colocação === 'terceiro' ) {
        colocação = 3;
    } else if (colocação === 'Quarto' || colocação === 'quarto' ) {
        colocação = 4;
    } else if (colocação === 'Quinto' || colocação === 'quinto' ) {
        colocação = 5;
    } else if (colocação === 'Sexto' || colocação === 'sexto' ) {
        colocação = 6;
    }

} colocação_string()

switch (colocação) { 
    case 1:
        console.log('1° Lugar');
        break;

    case 2:
        console.log('2° lugar');
        break;

    case 3:
        console.log('3° lugar');
        break;

    case 4: case 5: case 6:
            console.log("NT :D");
            break;

    default:
        console.log('Você não está no pódio!')
        break;
}