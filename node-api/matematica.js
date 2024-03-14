//Função que divide dois numero 
function dividir(dividendo, divisor) {
    if(divisor === 0){
        throw new Error("Divisão por zero não é permitida");
    }
    return dividendo / divisor;
}

// Exporta a função dividir como módulo
// para que ela possa ser usada em outros arquivos
module.exports = dividir;