import typia from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_TagMatrix = _test_validateStringify(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.validateStringify(input),
    TagMatrix.SPOILERS,
);