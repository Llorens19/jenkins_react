import { execSync } from 'child_process';

const executor = process.env.EXECUTOR || 'unknown';
const motivo = process.env.MOTIVO || 'Sin motivo';

const commitMessage = `Pipeline ejecutada por ${executor}. Motivo: ${motivo}`;

try {
    // Configurar usuario global de Git
    execSync('git config --global user.name "Jenkins CI"', { stdio: 'inherit' });
    execSync('git config --global user.email "jenkins@example.com"', { stdio: 'inherit' });

    // Asegurarse de estar en la rama correcta
    execSync('git checkout ci_jenkins', { stdio: 'inherit' });

    // Verificar si hay cambios antes de intentar hacer commit
    const status = execSync('git status --porcelain', { encoding: 'utf-8' });
    if (!status.trim()) {
        console.log('No hay cambios para hacer commit.');
        process.exit(0); // Salir sin errores
    }

    // Agregar todos los archivos modificados
    execSync('git add .', { stdio: 'inherit' });

    // Hacer commit con el mensaje dinámico
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });

    // Configurar el upstream y hacer push
    execSync('git push --set-upstream origin ci_jenkins', { stdio: 'inherit' });

    console.log('Cambios enviados al repositorio con éxito.');
} catch (error) {
    console.error('Error al hacer el commit o push:', error);
    process.exit(1);
}
