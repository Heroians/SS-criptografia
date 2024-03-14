// Importa a função que será testada
const celsiusParaFahrenheit = require('./celsiusParaFahrenheit');

// Define um teste usando o Jest
test('Conversão de Celsius para Fahrenheit', () => {
    expect(celsiusParaFahrenheit(0)).toBe(32); // 0°C deve ser 32°F
});
