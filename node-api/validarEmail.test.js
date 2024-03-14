// Importa a função validarEmail que será testada.
const validarEmail = require('./validarEmail');

// A descrição indica o comportamento esperado.
test('verifica se o e-mail é válido', () => {
    // Utiliza a função de teste do Jest para verificar se o e-mail é válido.
    expect(validarEmail("usuario@example.com")).toBe(true);
});