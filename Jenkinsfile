pipeline {
    agent any
    triggers { 
        pollSCM('* * * * *') 
    }
    stages {
        stage('SCA') {
            steps {
                checkout scm
                bat 'gradle UiSCA'
            }
        }        
        stage('Dependency Management') {
            steps {
                
                bat 'gradle UiDependencyMgmt'
            }
        }
        stage('Compile & Configure') {
            steps {
                bat 'gradle UiProdBuild'
            }
        }        

        stage('Unit Test') {
            steps {
                bat 'gradle UiUnitTest'
            }
        }
        stage('Publish') {
            steps {
                script {
                    bat "gradle UiPublishReport"
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