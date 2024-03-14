// Função para verificar se a senha é válido
function verificarSenha(senha) {
    // Expressão regular que define os critérios para uma senha válida
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    if (regex.test(senha)) {
        return true; // senha Valida
    } else {
        return false; //senha Invalida
    }
}

// Exporta a função verificarSenha como módulo
// para que ela possa ser usada em outros arquivos
module.exports = verificarSenha;