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
                    def props = readProperties interpolate:true, file: 'jenkinsconfig.properties'
                    bat "echo $props.testMessage"
                    $props.testMessage = Mumbai
                    def props2 = readProperties interpolate:true, file: 'jenkinsconfig.properties'
                    bat "echo $props2.testMessage"

                }
            }
        }
    }
}