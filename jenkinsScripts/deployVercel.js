import { execSync } from 'child_process';

try {
    console.log('Desplegando la aplicación en Vercel...');
    // Desplegar la aplicación con el token explícito
    execSync('vercel --prod --yes --token ' + process.env.VERCEL_TOKEN, { stdio: 'inherit' });
    console.log('Despliegue completado con éxito.');
} catch (error) {
    console.error('Error durante el despliegue:', error);
    process.exit(1); // Detener el pipeline si hay un error
}
