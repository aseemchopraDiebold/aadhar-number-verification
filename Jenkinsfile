pipeline {
    agent any
    stages {
        stage('Dependency Management') {
            steps {
                bat 'gradle angularAppDependencyManagement'
            }
        }
        stage('Build') {
            steps {
                bat 'gradle angularAppBuild'
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