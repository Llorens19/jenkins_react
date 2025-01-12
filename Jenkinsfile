pipeline {
    agent any
    parameters {
        string(name: 'Executor', defaultValue: 'Llorens19', description: 'Nombre del ejecutor')
        string(name: 'Motivo', defaultValue: 'Prueba', description: 'Motivo de la ejecución')
        string(name: 'ChatID', defaultValue: '1142960583', description: 'ID del chat de Telegram')
    }
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
                    // Comando para instalar dependencias y ejecutar ESLint en Windows
                    bat 'npm install'
                    bat 'npx eslint src/ --max-warnings=0'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Ejecutar pruebas con Jest en Windows
                    bat 'npm test -- --ci --reporters=default --reporters=jest-junit'
                }
            }
        }
    }
}
