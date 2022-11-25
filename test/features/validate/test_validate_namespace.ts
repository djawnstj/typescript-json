import TSON from "../../../src";
import { Namespace } from "../../structures/Namespace";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_namespace = _test_validate(
    "namespace",
    Namespace.generate,
    (input) => TSON.validate(input),
    // UNABLE TO SPOIL
);
