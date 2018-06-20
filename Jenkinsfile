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
                    bat "gradle angularAppPublish"

                }
            }
        }
    }
    post {
        success {
            def input = readJSON file: 'jenkinsconfig.json'
            input.workspace = workspace
            writeJSON file: 'jenkinsconfig.json', json: input

            def input2 = readJSON file: 'jenkinsconfig.json'
            bat 'echo ${input2.workspace}'

        }
    }
}