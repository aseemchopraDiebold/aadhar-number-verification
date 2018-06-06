"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Lint = require("tslint");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new noMultiArgsFunctionWalker(sourceFile, this.getOptions()));
    };
    ;
    Rule.FAILURE_STRING = "no multi args function allowed";
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var noMultiArgsFunctionWalker = /** @class */ (function (_super) {
    __extends(noMultiArgsFunctionWalker, _super);
    function noMultiArgsFunctionWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    noMultiArgsFunctionWalker.prototype.visitArrowFunction = function (node) {
        if (node.parameters.length > 1) {
            this.addFailure(this.createFailure(node.getStart(), node.getEnd(), Rule.FAILURE_STRING));
        }
        _super.prototype.visitArrowFunction.call(this, node);
    };
    return noMultiArgsFunctionWalker;
}(Lint.RuleWalker));
