import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_native_simple = _test_validate_equals(
    "simple native",
    NativeSimple.generate,
    (input) => TSON.validateEquals(input),
    false,
);
