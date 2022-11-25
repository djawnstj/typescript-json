import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_create_assert_equals_set_union = _test_assert_equals(
    "union set",
    SetUnion.generate,
    TSON.createAssertEquals<SetUnion>(),
    false,
);
