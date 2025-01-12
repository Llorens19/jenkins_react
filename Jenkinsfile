pipeline {
    agent any
    stages {
        stage('Petición de datos') {
            steps {
                script {
                    def executor = input(message: '¿Quién ejecuta el pipeline?', parameters: [string(defaultValue: '', description: 'Nombre del ejecutor', name: 'Executor')])
                    def motivo = input(message: '¿Cuál es el motivo de esta ejecución?', parameters: [string(defaultValue: '', description: 'Motivo de la ejecución', name: 'Motivo')])
                    def chatID = input(message: 'Introduce el Chat ID de Telegram', parameters: [string(defaultValue: '', description: 'ID del chat de Telegram', name: 'Chat ID')])
                    echo "Executor: ${executor}, Motivo: ${motivo}, Chat ID: ${chatID}"
                }
            }
        }
        stage('Linter') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npx eslint src/ --max-warnings=0'
                }
            }
        }
    }
}
