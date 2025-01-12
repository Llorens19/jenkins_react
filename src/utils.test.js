const { sum } = require('./utils');

test('suma de 2 + 3 es 5', () => {
    expect(sum(2, 3)).toBe(5);
});

test('suma de 0 + 0 es 0', () => {
    expect(sum(0, 0)).toBe(0);
});

test('suma de -1 + 1 es 0', () => {
    expect(sum(-1, 1)).toBe(0);
});
