const fs = require('fs');
const path = require('path');

// Obtén el resultado de los tests desde una variable de entorno
const testResult = process.env.TEST_RESULT || 'Failure';

// Define los badges
const badges = {
    Success: '[![Success](https://img.shields.io/badge/test-success-brightgreen)](https://shields.io/)',
    Failure: '[![Failure](https://img.shields.io/badge/test-failure-red)](https://shields.io/)',
};

// Ruta del archivo README.md
const readmePath = path.join(__dirname, '..', 'README.md');

// Lee el contenido actual del README
let readmeContent = fs.readFileSync(readmePath, 'utf-8');

// Actualiza el contenido con el badge adecuado
const badgeText = `RESULTADO DE LOS ÚLTIMOS TESTS\n\n${badges[testResult]}`;
readmeContent = readmeContent.replace(/RESULTADO DE LOS ÚLTIMOS TESTS\n\n.*$/, badgeText);

// Si no existe el marcador, añade el badge al final del README
if (!readmeContent.includes('RESULTADO DE LOS ÚLTIMOS TESTS')) {
    readmeContent += `\n\n${badgeText}`;
}

// Escribe los cambios en el README
fs.writeFileSync(readmePath, readmeContent);

console.log(`README.md actualizado con el resultado: ${testResult}`);
