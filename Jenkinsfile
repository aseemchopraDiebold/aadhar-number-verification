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
                    def props = readJSON file: 'jenkinsconfig.json'
                    bat "echo $props.testMessage"
                    props.testMessage = 'Mumbai'
                    writeJSON file: 'jenkinsconfig.json', json: props
                    def props2 = readJSON interpolate: true, file: 'jenkinsconfig.json'
                    bat "echo $props2.testMessage"

                }
            }
        }
    }
}

pipeline {
    agent any
    triggers { 
        pollSCM('* * * * *') 
    }
    stages {
        stage('Unit Test') {
            steps {
                bat 'gradle angularAppTest'
            }
        }
    }
}