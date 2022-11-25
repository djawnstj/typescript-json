import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_create_assert_equals_native_union = _test_assert_equals(
    "union native",
    NativeUnion.generate,
    TSON.createAssertEquals<NativeUnion>(),
    false,
);
