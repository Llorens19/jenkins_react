pipeline {
    agent any
    parameters {
        string(name: 'EXECUTOR', defaultValue: 'Llorens19', description: 'Nombre de la persona que ejecuta el pipeline')
        string(name: 'MOTIVO', defaultValue: 'Test', description: 'Motivo para ejecutar el pipeline')
        string(name: 'CHAT_ID', defaultValue: '1142960583', description: 'Chat ID de Telegram para notificaciones')
    }
    stages {
        stage('Petición de datos') {
            steps {
                script {
                    echo "Executor: ${params.EXECUTOR}"
                    echo "Motivo: ${params.MOTIVO}"
                    echo "Chat ID: ${params.CHAT_ID}"
                }
            }
        }
        stage('Linter') {
            steps {
                script {
                    bat 'npx eslint src/ || exit 1'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                     bat 'npm test -- --watchAll=false --passWithNoTests || exit 1'
                }
            }
}


    }
}
