import TSON from "../../../../src";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_DynamicEnumeration = 
    _test_application("ajv")(
        "DynamicEnumeration",
        TSON.application<[DynamicEnumeration], "ajv">(),{schemas: [
        {
            $ref: "components#/schemas/DynamicEnumeration"
        }
    ],
    components: {
        schemas: {
            DynamicEnumeration: {
                $id: "components#/schemas/DynamicEnumeration",
                type: "object",
                properties: {
                    ar: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "zh-Hans": {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "zh-Hant": {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    en: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    fr: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    de: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    ja: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    ko: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    pt: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    ru: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);