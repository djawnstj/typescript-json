import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_set_union = _test_stringify(
    "union set",
    SetUnion.generate,
    TSON.createStringify<SetUnion>(),
);
