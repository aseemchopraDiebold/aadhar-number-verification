pipeline {
    agent any
    triggers { 
        pollSCM('* * * * *') 
    }
    stages {
        stage('SCA') {
            steps {
                checkout scm
                bat 'gradle UiDependencyMgmt'
                bat 'gradle UiSCA'
            }
        }        
        stage('Build') {
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
                bat "gradle UiPublishReport"
            }
        }
    }
    post {
        success {
            script {
                echo 'Success'
                // def input = readJSON file: 'jenkinsconfig.json'
                // input.workspace = workspace
                // writeJSON file: 'jenkinsconfig.json', json: input
                // build job: 'Test Control Pipeline', propagate: false, parameters: [string(name: 'customWorkspaceLoc', value: workspace)]
                // def input2 = readJSON file: 'jenkinsconfig.json'
                // bat "echo ${input2.workspace}"
            }

        }
    }
}