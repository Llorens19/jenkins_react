import fetch from 'node-fetch';

// Token del bot y Chat ID desde variables de entorno
const telegramToken = process.env.TELEGRAM_TOKEN;
const chatId = process.env.CHAT_ID;

if (!telegramToken || !chatId) {
    console.error('ERROR: TELEGRAM_TOKEN o CHAT_ID no están configurados.');
    process.exit(1);
}

// Mensaje a enviar
const linterResult = process.env.LINTER_RESULT || 'Sin ejecutar';
const testResult = process.env.TEST_RESULT || 'Sin ejecutar';
const buildResult = process.env.BUILD_RESULT || 'Sin ejecutar';
const deployResult = process.env.DEPLOY_RESULT || 'Sin ejecutar';

const message = `
🚀 *Pipeline ejecutado con éxito* 🚀
- Linter: ${linterResult}
- Tests: ${testResult}
- Build: ${buildResult}
- Deploy: ${deployResult}
`.trim();

// Enviar mensaje a Telegram
fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
    }),
})
    .then((response) => {
        if (!response.ok) throw new Error('Error enviando el mensaje a Telegram');
        console.log('Mensaje enviado correctamente a Telegram.');
    })
    .catch((error) => {
        console.error('Error:', error.message);
        process.exit(1);
    });
