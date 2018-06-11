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
                bat 'gradle angularAppLint'
            }
        }
        stage('Unit Test') {
            steps {
                bat 'gradle angularAppTest'
            }
        }
    }
}