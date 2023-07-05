function frutas(tipoFrutas) {
    switch (tipoFrutas) {
        case 'Laranja':
            console.log("O quilo da laranja está R$0,59");
            break;

        case 'Maçã':
            console.log("O quilo da maçã está R$0,39");
            break;

        case 'Uva': 
            console.log("O quilo da uva está R$0,14");
            break;

        default:
            console.log(`Desculpe, não temos ${tipoFrutas} aqui!`);
    }
}
frutas('AIDS')

