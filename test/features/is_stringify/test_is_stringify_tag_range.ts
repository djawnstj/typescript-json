import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_tag_range = _test_is_stringify(
    "range tag",
    TagRange.generate,
    (input) => TSON.isStringify(input),
    TagRange.SPOILERS,
);
