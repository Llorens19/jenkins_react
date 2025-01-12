pipeline {
    agent any
    parameters {
        string(name: 'EXECUTOR', defaultValue: '', description: 'Nombre de la persona que ejecuta el pipeline')
        string(name: 'MOTIVO', defaultValue: '', description: 'Motivo para ejecutar el pipeline')
        string(name: 'CHAT_ID', defaultValue: '', description: 'Chat ID de Telegram para notificaciones')
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
    }
}
