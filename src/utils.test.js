// src/utils.js
function suma(a, b) {
    return a + b;
}


test('suma 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
});

test('suma 5 + 5 es igual a 10', () => {
    expect(suma(5, 5)).toBe(10);
});

test('suma 0 + 0 es igual a 0', () => {
    expect(suma(0, 0)).toBe(0);
});
