// Importa a função helloWorld que será testada.
const helloWorld = require('./helloWorld');

//Define um teste usando o Jest. A descrição indica o comportamento esperado.
test('should return "Hello, World!"', () => {

    //chama a função helloWorld e armazena o resultado na variavel result.
    const result = helloWorld();

    //Utiliza o Matcher (Comparador) ToBe do Jest para verificar se o resultado
    //é estritamente igual à string "Hello, World!".
    expect(result).toBe('Hello, World!');
});