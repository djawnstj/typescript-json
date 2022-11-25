import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_set_union = _test_is_stringify(
    "union set",
    SetUnion.generate,
    (input) => TSON.isStringify(input),
    SetUnion.SPOILERS,
);
