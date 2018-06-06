import * as ts from 'typescript';
import * as Lint from 'tslint';

export class Rule extends Lint.Rules.AbstractRule {
    public static FAILURE_STRING="no multi args function allowed";

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(
            new noMultiArgsFunctionWalker(sourceFile, this.getOptions())
        );
    };
}

class noMultiArgsFunctionWalker extends Lint.RuleWalker {
    debugger;
    public visitArrowFunction(node : ts.ArrowFunction){
        console.log('Parameter length:' + node.parameters.length);
        if(node.parameters.length > 1){
            this.addFailure(
                this.createFailure(node.getStart(), node.getEnd(), Rule.FAILURE_STRING)
            );
        }
        super.visitArrowFunction(node);

    }
}