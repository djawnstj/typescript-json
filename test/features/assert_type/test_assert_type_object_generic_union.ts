import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_object_generic_union = _test_assert_type(
    "generic unioned object",
    ObjectGenericUnion.generate,
    (input) => TSON.assertType(input),
    ObjectGenericUnion.SPOILERS,
);
