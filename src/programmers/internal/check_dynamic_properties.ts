import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IExpressionEntry } from "../helpers/IExpressionEntry";
import { check_everything } from "./check_everything";
import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const check_dynamic_properties =
    (equals: boolean) =>
    (assert: boolean) =>
    (halter?: (exp: ts.CallExpression) => ts.Expression) =>
    (wrapper?: (exp: ts.Expression) => ts.Expression) =>
    (
        regular: IExpressionEntry[],
        dynamic: IExpressionEntry[],
    ): ts.Expression => {
        const criteria = ts.factory.createCallExpression(
            IdentifierFactory.join(
                ts.factory.createCallExpression(
                    ts.factory.createIdentifier("Object.entries"),
                    undefined,
                    [ts.factory.createIdentifier("input")],
                ),
                assert ? "every" : "map",
            ),
            undefined,
            [check_dynamic_property(equals)(wrapper)(regular, dynamic)],
        );
        return (halter || ((elem) => elem))(
            assert ? criteria : check_everything(criteria),
        );
    };

const check_dynamic_property =
    (equals: boolean) =>
    (wrapper?: (exp: ts.Expression) => ts.Expression) =>
    (regular: IExpressionEntry[], dynamic: IExpressionEntry[]) => {
        //----
        // IF CONDITIONS
        //----
        // PREPARE ASSETS
        const key = ts.factory.createIdentifier("key");
        const value = ts.factory.createIdentifier("value");

        const statements: ts.IfStatement[] = [
            ts.factory.createIfStatement(
                ts.factory.createStrictEquality(
                    ts.factory.createIdentifier("undefined"),
                    value,
                ),
                ts.factory.createReturnStatement(ts.factory.createTrue()),
            ),
        ];
        const add = (exp: ts.Expression, output: ts.Expression) =>
            statements.push(
                ts.factory.createIfStatement(
                    exp,
                    ts.factory.createReturnStatement(output),
                ),
            );

        // GATHER CONDITIONS
        if (equals === true)
            add(is_regular_property(regular), ts.factory.createTrue());
        for (const entry of dynamic)
            add(
                ts.factory.createCallExpression(
                    ts.factory.createIdentifier(
                        `RegExp(/${metadata_to_pattern(true)(
                            entry.key,
                        )}/).test`,
                    ),
                    undefined,
                    [key],
                ),
                entry.expression,
            );

        //----
        // FUNCTION BODY
        //----
        // CLOSURE BLOCK
        const block: ts.Block = ts.factory.createBlock(
            [
                ...statements,
                ts.factory.createReturnStatement(
                    equals === true
                        ? ts.factory.createFalse()
                        : ts.factory.createTrue(),
                ),
            ],
            true,
        );

        // ERROR REPORTER
        const body: ts.Expression | ts.Block = wrapper
            ? wrapper(
                  ts.factory.createCallExpression(
                      ts.factory.createArrowFunction(
                          undefined,
                          undefined,
                          [],
                          undefined,
                          undefined,
                          block,
                      ),
                      undefined,
                      undefined,
                  ),
              )
            : block;

        // RETURNS
        return ts.factory.createArrowFunction(
            undefined,
            undefined,
            [
                IdentifierFactory.parameter(
                    ts.factory.createArrayBindingPattern([
                        ts.factory.createBindingElement(
                            undefined,
                            undefined,
                            "key",
                        ),
                        ts.factory.createBindingElement(
                            undefined,
                            undefined,
                            "value",
                        ),
                    ]),
                ),
            ],
            undefined,
            undefined,
            body,
        );
    };

const is_regular_property = (regular: IExpressionEntry[]) =>
    ts.factory.createCallExpression(
        IdentifierFactory.join(
            ts.factory.createArrayLiteralExpression(
                regular.map((entry) =>
                    ts.factory.createStringLiteral(entry.key.getSoleLiteral()!),
                ),
            ),
            "some",
        ),
        undefined,
        [
            ts.factory.createArrowFunction(
                undefined,
                undefined,
                [IdentifierFactory.parameter("prop")],
                undefined,
                undefined,
                ts.factory.createStrictEquality(
                    ts.factory.createIdentifier("key"),
                    ts.factory.createIdentifier("prop"),
                ),
            ),
        ],
    );
