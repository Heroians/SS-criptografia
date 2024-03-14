// Importa a função verificarSenha que será testada.
const verificarSenha = require('./verificarSenha');

// A descrição indica o comportamento esperado.
test('verifica se a senha é válido', () => {
    // Utiliza a função de teste do Jest para verificar se a senha é válida.
    expect(verificarSenha("Senha@123")).toBe(true);
});