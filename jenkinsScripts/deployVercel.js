import { execSync } from 'child_process';

try {
    // Desplegar la aplicación en Vercel con confirmación automática
    console.log('Desplegando la aplicación en Vercel...');
    execSync('vercel --prod --yes', { stdio: 'inherit' });
    console.log('Despliegue completado con éxito.');
} catch (error) {
    console.error('Error durante el despliegue:', error);
    process.exit(1); // Detener el pipeline si hay un error
}
