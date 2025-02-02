import TSON from "../../../../src";
import { UltimateUnion } from "../../../structures/UltimateUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_UltimateUnion = 
    _test_application("swagger")(
        "UltimateUnion",
        TSON.application<[UltimateUnion], "swagger">(),{schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/IJsonApplication"
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            IJsonApplication: {
                type: "object",
                properties: {
                    schemas: {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt_",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INumber",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IBigInt",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IString",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IArray",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.ITuple",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IOneOf",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IReference",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IUnknown",
                                    "x-typia-required": true
                                }
                            ],
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    },
                    components: {
                        $ref: "#/components/schemas/IJsonComponents",
                        "x-typia-required": true
                    },
                    purpose: {
                        type: "string",
                        "enum": [
                            "swagger",
                            "ajv"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    prefix: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "schemas",
                    "components",
                    "purpose",
                    "prefix"
                ],
                "x-typia_jsDocTags": []
            },
            "IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_": {
                type: "object",
                properties: {
                    "enum": {
                        type: "array",
                        items: {
                            type: "boolean",
                            nullable: false,
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    },
                    "default": {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    },
                    type: {
                        type: "string",
                        "enum": [
                            "boolean"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    nullable: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": true
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IType",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-typia-required": false
                                }
                            ],
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-required": {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "enum",
                    "type",
                    "nullable"
                ],
                "x-typia_jsDocTags": []
            },
            "IMetadataTag.IItems": {
                type: "object",
                properties: {
                    kind: {
                        type: "string",
                        "enum": [
                            "items"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    minimum: {
                        $ref: "#/components/schemas/IMetadataTag.ISign",
                        "x-typia-required": false
                    },
                    maximum: {
                        $ref: "#/components/schemas/IMetadataTag.ISign",
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "kind"
                ],
                "x-typia_jsDocTags": []
            },
            "IMetadataTag.ISign": {
                type: "object",
                properties: {
                    include: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": true
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "include",
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "IMetadataTag.IMinItems": {
                type: "object",
                properties: {
                    kind: {
                        type: "string",
                        "enum": [
                            "minItems"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "kind",
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "IMetadataTag.IMaxItems": {
                type: "object",
                properties: {
                    kind: {
                        type: "string",
                        "enum": [
                            "maxItems"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "kind",
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "IMetadataTag.IFormat": {
                type: "object",
                properties: {
                    kind: {
                        type: "string",
                        "enum": [
                            "format"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    value: {
                        type: "string",
                        "enum": [
                            "uuid",
                            "email",
                            "url",
                            "ipv4",
                            "ipv6"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "kind",
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "IMetadataTag.IPattern": {
                type: "object",
                properties: {
                    kind: {
                        type: "string",
                        "enum": [
                            "pattern"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    value: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "kind",
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "IMetadataTag.ILength": {
                type: "object",
                properties: {
                    kind: {
                        type: "string",
                        "enum": [
                            "length"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    minimum: {
                        $ref: "#/components/schemas/IMetadataTag.ISign",
                        "x-typia-required": false
                    },
                    maximum: {
                        $ref: "#/components/schemas/IMetadataTag.ISign",
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "kind"
                ],
                "x-typia_jsDocTags": []
            },
            "IMetadataTag.IMinLength": {
                type: "object",
                properties: {
                    kind: {
                        type: "string",
                        "enum": [
                            "minLength"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "kind",
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "IMetadataTag.IMaxLength": {
                type: "object",
                properties: {
                    kind: {
                        type: "string",
                        "enum": [
                            "maxLength"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "kind",
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "IMetadataTag.IType": {
                type: "object",
                properties: {
                    kind: {
                        type: "string",
                        "enum": [
                            "type"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    value: {
                        type: "string",
                        "enum": [
                            "int",
                            "uint"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "kind",
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "IMetadataTag.IRange": {
                type: "object",
                properties: {
                    kind: {
                        type: "string",
                        "enum": [
                            "range"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    minimum: {
                        $ref: "#/components/schemas/IMetadataTag.ISign",
                        "x-typia-required": false
                    },
                    maximum: {
                        $ref: "#/components/schemas/IMetadataTag.ISign",
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "kind"
                ],
                "x-typia_jsDocTags": []
            },
            "IMetadataTag.IMinimum": {
                type: "object",
                properties: {
                    kind: {
                        type: "string",
                        "enum": [
                            "minimum"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "kind",
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "IMetadataTag.IMaximum": {
                type: "object",
                properties: {
                    kind: {
                        type: "string",
                        "enum": [
                            "maximum"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "kind",
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "IMetadataTag.IExclusiveMinimum": {
                type: "object",
                properties: {
                    kind: {
                        type: "string",
                        "enum": [
                            "exclusiveMinimum"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "kind",
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "IMetadataTag.IExclusiveMaximum": {
                type: "object",
                properties: {
                    kind: {
                        type: "string",
                        "enum": [
                            "exclusiveMaximum"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "kind",
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "IMetadataTag.IMultipleOf": {
                type: "object",
                properties: {
                    kind: {
                        type: "string",
                        "enum": [
                            "multipleOf"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "kind",
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "IMetadataTag.IStep": {
                type: "object",
                properties: {
                    kind: {
                        type: "string",
                        "enum": [
                            "step"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    value: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "kind",
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            IJsDocTagInfo: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    text: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo.IText",
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "name"
                ],
                "x-typia_jsDocTags": []
            },
            "IJsDocTagInfo.IText": {
                type: "object",
                properties: {
                    text: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    kind: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "text",
                    "kind"
                ],
                "x-typia_jsDocTags": []
            },
            "IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_": {
                type: "object",
                properties: {
                    "enum": {
                        type: "array",
                        items: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    },
                    "default": {
                        type: "number",
                        nullable: false,
                        "x-typia-required": false
                    },
                    type: {
                        type: "string",
                        "enum": [
                            "number"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    nullable: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": true
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IType",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-typia-required": false
                                }
                            ],
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-required": {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "enum",
                    "type",
                    "nullable"
                ],
                "x-typia_jsDocTags": []
            },
            "IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt_": {
                type: "object",
                properties: {
                    "enum": {
                        type: "array",
                        items: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    },
                    "default": {
                        type: "number",
                        nullable: false,
                        "x-typia-required": false
                    },
                    type: {
                        type: "string",
                        "enum": [
                            "bigint"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    nullable: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": true
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IType",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-typia-required": false
                                }
                            ],
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-required": {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "enum",
                    "type",
                    "nullable"
                ],
                "x-typia_jsDocTags": []
            },
            "IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_": {
                type: "object",
                properties: {
                    "enum": {
                        type: "array",
                        items: {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    },
                    "default": {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    type: {
                        type: "string",
                        "enum": [
                            "string"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    nullable: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": true
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IType",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-typia-required": false
                                }
                            ],
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-required": {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "enum",
                    "type",
                    "nullable"
                ],
                "x-typia_jsDocTags": []
            },
            "IJsonSchema.IBoolean": {
                type: "object",
                properties: {
                    "default": {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    },
                    type: {
                        type: "string",
                        "enum": [
                            "boolean"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    nullable: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": true
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IType",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-typia-required": false
                                }
                            ],
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-required": {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "type",
                    "nullable"
                ],
                "x-typia_jsDocTags": []
            },
            "IJsonSchema.INumber": {
                type: "object",
                properties: {
                    minimum: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": false
                    },
                    maximum: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": false
                    },
                    exclusiveMinimum: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": false
                    },
                    exclusiveMaximum: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": false
                    },
                    multipleOf: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "default": {
                        type: "number",
                        nullable: false,
                        "x-typia-required": false
                    },
                    type: {
                        type: "string",
                        "enum": [
                            "number",
                            "integer"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    nullable: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": true
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IType",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-typia-required": false
                                }
                            ],
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-required": {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "type",
                    "nullable"
                ],
                "x-typia_jsDocTags": []
            },
            "IJsonSchema.IBigInt": {
                type: "object",
                properties: {
                    "default": {
                        type: "number",
                        nullable: false,
                        "x-typia-required": false
                    },
                    type: {
                        type: "string",
                        "enum": [
                            "bigint"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    nullable: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": true
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IType",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-typia-required": false
                                }
                            ],
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-required": {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "type",
                    "nullable"
                ],
                "x-typia_jsDocTags": []
            },
            "IJsonSchema.IString": {
                type: "object",
                properties: {
                    minLength: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": false
                    },
                    maxLength: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": false
                    },
                    pattern: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    format: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "default": {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    type: {
                        type: "string",
                        "enum": [
                            "string"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    nullable: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": true
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IType",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-typia-required": false
                                }
                            ],
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-required": {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "type",
                    "nullable"
                ],
                "x-typia_jsDocTags": []
            },
            "IJsonSchema.IArray": {
                type: "object",
                properties: {
                    items: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt_",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.INumber",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IBigInt",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IString",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IArray",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.ITuple",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IOneOf",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IReference",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IUnknown",
                                "x-typia-required": true
                            }
                        ],
                        "x-typia-required": true
                    },
                    minItems: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": false
                    },
                    maxItems: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": false
                    },
                    type: {
                        type: "string",
                        "enum": [
                            "array"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    nullable: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": true
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IType",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-typia-required": false
                                }
                            ],
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-required": {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "items",
                    "type",
                    "nullable"
                ],
                "x-typia_jsDocTags": []
            },
            "IJsonSchema.ITuple": {
                type: "object",
                properties: {
                    items: {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt_",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INumber",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IBigInt",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IString",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.ITuple",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IArray",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IOneOf",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IReference",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IUnknown",
                                    "x-typia-required": true
                                }
                            ],
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    },
                    type: {
                        type: "string",
                        "enum": [
                            "array"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    nullable: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": true
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IType",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-typia-required": false
                                }
                            ],
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-required": {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "items",
                    "type",
                    "nullable"
                ],
                "x-typia_jsDocTags": []
            },
            "IJsonSchema.IOneOf": {
                type: "object",
                properties: {
                    oneOf: {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt_",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INumber",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IBigInt",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IString",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IOneOf",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.ITuple",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IArray",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IReference",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                    "x-typia-required": true
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IUnknown",
                                    "x-typia-required": true
                                }
                            ],
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IType",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-typia-required": false
                                }
                            ],
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-required": {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "oneOf"
                ],
                "x-typia_jsDocTags": []
            },
            "IJsonSchema.IReference": {
                type: "object",
                properties: {
                    $ref: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IType",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-typia-required": false
                                }
                            ],
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-required": {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "$ref"
                ],
                "x-typia_jsDocTags": []
            },
            "IJsonSchema.IRecursiveReference": {
                type: "object",
                properties: {
                    $recursiveRef: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IType",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-typia-required": false
                                }
                            ],
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-required": {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "$recursiveRef"
                ],
                "x-typia_jsDocTags": []
            },
            "IJsonSchema.INullOnly": {
                type: "object",
                properties: {
                    type: {
                        type: "string",
                        "enum": [
                            "null"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    deprecated: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-metaTags": {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IFormat",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IPattern",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.ILength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IType",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IRange",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                    "x-typia-required": false
                                },
                                {
                                    $ref: "#/components/schemas/IMetadataTag.IStep",
                                    "x-typia-required": false
                                }
                            ],
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia-required": {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "type"
                ],
                "x-typia_jsDocTags": []
            },
            "IJsonSchema.IUnknown": {
                type: "object",
                properties: {},
                nullable: false,
                "x-typia_jsDocTags": []
            },
            IJsonComponents: {
                type: "object",
                properties: {
                    schemas: {
                        $ref: "#/components/schemas/Record_lt_string_comma__space_IJsonComponents.IObject_gt_",
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "schemas"
                ],
                "x-typia_jsDocTags": []
            },
            "Record_lt_string_comma__space_IJsonComponents.IObject_gt_": {
                type: "object",
                properties: {},
                additionalProperties: {
                    $ref: "#/components/schemas/IJsonComponents.IObject",
                    "x-typia-required": true
                },
                nullable: false,
                "x-typia_jsDocTags": []
            },
            "IJsonComponents.IObject": {
                type: "object",
                properties: {
                    $id: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    type: {
                        type: "string",
                        "enum": [
                            "object"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    nullable: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": true
                    },
                    properties: {
                        $ref: "#/components/schemas/Record_lt_string_comma__space_IJsonSchema_gt_",
                        "x-typia-required": true
                    },
                    patternProperties: {
                        $ref: "#/components/schemas/Record_lt_string_comma__space_IJsonSchema_gt_",
                        "x-typia-required": false
                    },
                    additionalProperties: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                                "x-typia-required": false
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                                "x-typia-required": false
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt_",
                                "x-typia-required": false
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                                "x-typia-required": false
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                "x-typia-required": false
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.INumber",
                                "x-typia-required": false
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IBigInt",
                                "x-typia-required": false
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IString",
                                "x-typia-required": false
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IArray",
                                "x-typia-required": false
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.ITuple",
                                "x-typia-required": false
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IOneOf",
                                "x-typia-required": false
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IReference",
                                "x-typia-required": false
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                "x-typia-required": false
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                "x-typia-required": false
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IUnknown",
                                "x-typia-required": false
                            }
                        ],
                        "x-typia-required": false
                    },
                    required: {
                        type: "array",
                        items: {
                            type: "string",
                            nullable: false,
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    description: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    "x-typia_jsDocTags": {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/IJsDocTagInfo",
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    $recursiveAnchor: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "type",
                    "nullable",
                    "properties"
                ],
                "x-typia_jsDocTags": []
            },
            Record_lt_string_comma__space_IJsonSchema_gt_: {
                type: "object",
                properties: {},
                additionalProperties: {
                    oneOf: [
                        {
                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                            "x-typia-required": true
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                            "x-typia-required": true
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt_",
                            "x-typia-required": true
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                            "x-typia-required": true
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IBoolean",
                            "x-typia-required": true
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.INumber",
                            "x-typia-required": true
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IBigInt",
                            "x-typia-required": true
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IString",
                            "x-typia-required": true
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IArray",
                            "x-typia-required": true
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.ITuple",
                            "x-typia-required": true
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IOneOf",
                            "x-typia-required": true
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IReference",
                            "x-typia-required": true
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                            "x-typia-required": true
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.INullOnly",
                            "x-typia-required": true
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IUnknown",
                            "x-typia-required": true
                        }
                    ],
                    "x-typia-required": true
                },
                nullable: false,
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);