import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_dynamic_union = _test_assert_stringify(
    "dynamic union",
    DynamicUnion.generate,
    (input) => TSON.assertStringify(input),
    DynamicUnion.SPOILERS,
);
