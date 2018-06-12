pipeline {
    agent any
    triggers { 
        pollSCM('* * * * *') 
    }
    stages {
        stage('Dependency Management & Build') {
            steps {
                checkout scm
                bat 'gradle angularAppDependencyManagement'
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
        stage('Publish') {
            steps {
                script {
                    def props = readProperties file: 'jenkinsconfig.properties'
                }
                bat 'echo $props.testMessage'
            }
        }
    }
}