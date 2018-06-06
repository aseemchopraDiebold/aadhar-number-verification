const tslintHtmlReport = require('tslint-html-report');

let config = {
    tslint: 'tslint.json', // path to tslint.json
    srcFiles: 'src/**/*.ts', // files to lint
    outDir: 'target/tslint-report', // output folder to write the report to
    html: 'tslint-report.html', // name of the html report generated
    exclude: [], // Files/patterns to exclude
    breakOnError: false, // Should it throw an error in tslint errors are found
    typeCheck: false, // enable type checking. requires tsconfig.json
    tsconfig: 'tsconfig.json' // path to tsconfig.json
  }
tslintHtmlReport(config);