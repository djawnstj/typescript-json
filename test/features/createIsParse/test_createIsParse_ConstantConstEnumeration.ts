import typia from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ConstantConstEnumeration = _test_isParse(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    typia.createIsParse<ConstantConstEnumeration>(),
    ConstantConstEnumeration.SPOILERS,
);