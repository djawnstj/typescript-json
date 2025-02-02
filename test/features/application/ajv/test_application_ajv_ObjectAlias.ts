import TSON from "../../../../src";
import { ObjectAlias } from "../../../structures/ObjectAlias";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectAlias = 
    _test_application("ajv")(
        "ObjectAlias",
        TSON.application<[ObjectAlias], "ajv">(),{schemas: [
        {
            type: "array",
            items: {
                $ref: "components#/schemas/ObjectAlias.IMember"
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ObjectAlias.IMember": {
                $id: "components#/schemas/ObjectAlias.IMember",
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: true,
                        "x-typia-required": true
                    },
                    email: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    sex: {
                        oneOf: [
                            {
                                type: "number",
                                "enum": [
                                    2,
                                    1
                                ],
                                nullable: true,
                                "x-typia-required": true
                            },
                            {
                                type: "string",
                                "enum": [
                                    "male",
                                    "female"
                                ],
                                nullable: true,
                                "x-typia-required": true
                            }
                        ],
                        "x-typia-required": true
                    },
                    age: {
                        type: "number",
                        nullable: true,
                        "x-typia-required": true
                    },
                    dead: {
                        type: "boolean",
                        nullable: true,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "email",
                    "name",
                    "sex",
                    "age",
                    "dead"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);