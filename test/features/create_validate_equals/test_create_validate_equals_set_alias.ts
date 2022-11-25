import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_create_validate_equals_set_alias = _test_validate_equals(
    "aliased set",
    SetAlias.generate,
    TSON.createValidateEquals<SetAlias>(),
    false,
);
