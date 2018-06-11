pipeline {
    agent any
    stages {
        stage('Dependency Management') {
            steps {
                sh "gradle angularAppDependencyManagement"
            }
        }
        stage('Build') {
            steps {
                echo 'Build'
            }
        }
        stage('Static Code Analysis') {
            steps {
                echo 'Static Code Analysis'
            }
        }
        stage('Unit Test') {
            steps {
                echo 'Unit Test'
            }
        }
    }
}