// Função para verificar se o email é válido
function validarEmail(email) {
    // Expressão regular para verificar o formato do email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Testa se o email corresponde à expressão regular
    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
}

module.exports = validarEmail;