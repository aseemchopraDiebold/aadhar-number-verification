var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = {
        description: '',
        passed: true,
        failed: true,
        pending: true,
        withLog: true,
    };

    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        $scope.searchSettings.passed = true;
        $scope.searchSettings.failed = true;
        $scope.searchSettings.pending = true;
        $scope.searchSettings.withLog = true;
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.specLevel = function (str) {
        var arr = str.split('|');
        str = "";
        if (arr.length < 3) {
            return true;
        }
        return false;
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };


    this.nToBr = function (str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };


    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number)/1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {passCount++};
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {pendingCount++};
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {failCount++}
        }
        return failCount;
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results =[
    {
        "description": "should display welcome message|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13860,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1527679869964,
        "duration": 1456
    },
    {
        "description": "should have aadhar number input tag|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13860,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://localhost:4300/ - WebSocket connection to 'ws://localhost:4300/sockjs-node/651/2hb4esws/websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1527679871481,
                "type": ""
            }
        ],
        "timestamp": 1527679871471,
        "duration": 349
    },
    {
        "description": "input tag should have 9999999999|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13860,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://localhost:4300/ - WebSocket connection to 'ws://localhost:4300/sockjs-node/785/iji0ylee/websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1527679871837,
                "type": ""
            }
        ],
        "timestamp": 1527679871830,
        "duration": 298
    },
    {
        "description": "should have validate aadhar number button|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13860,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://localhost:4300/ - WebSocket connection to 'ws://localhost:4300/sockjs-node/336/514ltqbu/websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1527679872148,
                "type": ""
            }
        ],
        "timestamp": 1527679872139,
        "duration": 293
    },
    {
        "description": "should validate the aadhar number|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13860,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://localhost:4300/ - WebSocket connection to 'ws://localhost:4300/sockjs-node/640/uwqtjbeb/websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1527679872500,
                "type": ""
            }
        ],
        "timestamp": 1527679872479,
        "duration": 503
    },
    {
        "description": "should display welcome message|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24136,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1536321872846,
        "duration": 4950
    },
    {
        "description": "should have aadhar number input tag|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24136,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1536321878454,
        "duration": 369
    },
    {
        "description": "input tag should have 9999999999|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24136,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://localhost:5000/vendor.js 72818 WebSocket connection to 'ws://localhost:5000/sockjs-node/551/kpiksxlh/websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1536321878869,
                "type": ""
            }
        ],
        "timestamp": 1536321878850,
        "duration": 548
    },
    {
        "description": "should have validate aadhar number button|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24136,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1536321879457,
        "duration": 266
    },
    {
        "description": "should validate the aadhar number|workspace-project App",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 24136,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.",
        "trace": "Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.\n    at Timeout._onTimeout (C:\\Users\\chopra2\\test-angular-5\\aadhar-nv\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4281:23)\n    at ontimeout (timers.js:482:11)\n    at tryOnTimeout (timers.js:317:5)\n    at Timer.listOnTimeout (timers.js:277:5)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://localhost:5000/vendor.js 72818 WebSocket connection to 'ws://localhost:5000/sockjs-node/818/ppl4mzbx/websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1536321879782,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://localhost:3000/aadhar/validate-aadhar/9999999999 - Failed to load resource: net::ERR_CONNECTION_REFUSED",
                "timestamp": 1536321882291,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00c9004e-00eb-0054-0047-0006009300de.png",
        "timestamp": 1536321879759,
        "duration": 60399
    },
    {
        "description": "should display welcome message|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8596,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1538198227881,
        "duration": 4702
    },
    {
        "description": "should have aadhar number input tag|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8596,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1538198232981,
        "duration": 451
    },
    {
        "description": "input tag should have 9999999999|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8596,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://localhost:5000/vendor.js 72818 WebSocket connection to 'ws://localhost:5000/sockjs-node/142/iboi4svb/websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1538198233466,
                "type": ""
            }
        ],
        "timestamp": 1538198233448,
        "duration": 637
    },
    {
        "description": "should have validate aadhar number button|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8596,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1538198234105,
        "duration": 385
    },
    {
        "description": "should validate the aadhar number|workspace-project App",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8596,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.",
        "trace": "Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.\n    at Timeout._onTimeout (C:\\Users\\chopra2\\test-angular-5\\aadhar-nv\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4281:23)\n    at ontimeout (timers.js:482:11)\n    at tryOnTimeout (timers.js:317:5)\n    at Timer.listOnTimeout (timers.js:277:5)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://localhost:5000/vendor.js 72818 WebSocket connection to 'ws://localhost:5000/sockjs-node/246/ahju4x4v/websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1538198234529,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://localhost:5000/ - Failed to load http://localhost:3000/aadhar/validate-aadhar/9999999999: The 'Access-Control-Allow-Origin' header has a value 'http://localhost:4300' that is not equal to the supplied origin. Origin 'http://localhost:5000' is therefore not allowed access.",
                "timestamp": 1538198235282,
                "type": ""
            }
        ],
        "screenShotFile": "images\\009800c9-0038-00e6-00c9-000300ba00dc.png",
        "timestamp": 1538198234506,
        "duration": 60419
    },
    {
        "description": "should display welcome message|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 4560,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1538198952455,
        "duration": 1613
    },
    {
        "description": "should have aadhar number input tag|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 4560,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://localhost:5000/vendor.js 72818 WebSocket connection to 'ws://localhost:5000/sockjs-node/802/wewtud3q/websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1538198954168,
                "type": ""
            }
        ],
        "timestamp": 1538198954147,
        "duration": 464
    },
    {
        "description": "input tag should have 9999999999|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 4560,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://localhost:5000/vendor.js 72818 WebSocket connection to 'ws://localhost:5000/sockjs-node/612/dypnt5mz/websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1538198954651,
                "type": ""
            }
        ],
        "timestamp": 1538198954627,
        "duration": 582
    },
    {
        "description": "should have validate aadhar number button|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 4560,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1538198955215,
        "duration": 413
    },
    {
        "description": "should validate the aadhar number|workspace-project App",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 4560,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.",
        "trace": "Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.\n    at Timeout._onTimeout (C:\\Users\\chopra2\\test-angular-5\\aadhar-nv\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4281:23)\n    at ontimeout (timers.js:482:11)\n    at tryOnTimeout (timers.js:317:5)\n    at Timer.listOnTimeout (timers.js:277:5)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://localhost:5000/vendor.js 72818 WebSocket connection to 'ws://localhost:5000/sockjs-node/600/ghmwtp1q/websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1538198955654,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://localhost:5000/ - Failed to load http://localhost:3000/aadhar/validate-aadhar/9999999999: The 'Access-Control-Allow-Origin' header has a value 'http://localhost:4300' that is not equal to the supplied origin. Origin 'http://localhost:5000' is therefore not allowed access.",
                "timestamp": 1538198956299,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00a30082-000e-0099-00d2-00f5003e0013.png",
        "timestamp": 1538198955639,
        "duration": 60430
    },
    {
        "description": "should display welcome message|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17524,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1538199611726,
        "duration": 2489
    },
    {
        "description": "should have aadhar number input tag|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17524,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1538199614309,
        "duration": 447
    },
    {
        "description": "input tag should have 9999999999|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17524,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://localhost:5000/vendor.js 72818 WebSocket connection to 'ws://localhost:5000/sockjs-node/073/nikm5252/websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1538199614771,
                "type": ""
            }
        ],
        "timestamp": 1538199614775,
        "duration": 505
    },
    {
        "description": "should have validate aadhar number button|workspace-project App",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17524,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://localhost:5000/vendor.js 72818 WebSocket connection to 'ws://localhost:5000/sockjs-node/289/2cipkgzl/websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1538199615301,
                "type": ""
            }
        ],
        "timestamp": 1538199615296,
        "duration": 277
    },
    {
        "description": "should validate the aadhar number|workspace-project App",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17524,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.",
        "trace": "Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.\n    at Timeout._onTimeout (C:\\Users\\chopra2\\test-angular-5\\aadhar-nv\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4281:23)\n    at ontimeout (timers.js:482:11)\n    at tryOnTimeout (timers.js:317:5)\n    at Timer.listOnTimeout (timers.js:277:5)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://localhost:5000/vendor.js 72818 WebSocket connection to 'ws://localhost:5000/sockjs-node/104/4ox5v5a4/websocket' failed: WebSocket is closed before the connection is established.",
                "timestamp": 1538199615591,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://localhost:5000/ - Failed to load http://localhost:3000/aadhar/validate-aadhar/9999999999: The 'Access-Control-Allow-Origin' header has a value 'http://localhost:4300' that is not equal to the supplied origin. Origin 'http://localhost:5000' is therefore not allowed access.",
                "timestamp": 1538199616176,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00f30002-00b1-0098-002a-00bb002d003c.png",
        "timestamp": 1538199615596,
        "duration": 60305
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length-1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};