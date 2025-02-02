import TSON from "../../../../src";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectGenericUnion = 
    _test_application("swagger")(
        "ObjectGenericUnion",
        TSON.application<[ObjectGenericUnion], "swagger">(),{schemas: [
        {
            oneOf: [
                {
                    $ref: "#/components/schemas/ObjectGenericUnion.ISaleQuestion"
                },
                {
                    $ref: "#/components/schemas/ObjectGenericUnion.ISaleReview"
                }
            ]
        }
    ],
    components: {
        schemas: {
            "ObjectGenericUnion.ISaleQuestion": {
                type: "object",
                properties: {
                    writer: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    answer: {
                        $ref: "#/components/schemas/ObjectGenericUnion.ISaleAnswer.Nullable",
                        "x-typia-required": true
                    },
                    id: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    hit: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    contents: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ObjectGenericUnion.ISaleArticle.IContent",
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    },
                    created_at: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "writer",
                    "answer",
                    "id",
                    "hit",
                    "contents",
                    "created_at"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectGenericUnion.ISaleAnswer.Nullable": {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    hit: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    contents: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ObjectGenericUnion.ISaleArticle.IContent",
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    },
                    created_at: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: true,
                required: [
                    "id",
                    "hit",
                    "contents",
                    "created_at"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectGenericUnion.ISaleArticle.IContent": {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    created_at: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    body: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    files: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/Omit_lt_ObjectGenericUnion.IAttachmentFile_comma__space__doublequote_id_doublequote__gt_",
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "created_at",
                    "title",
                    "body",
                    "files"
                ],
                "x-typia_jsDocTags": []
            },
            "Omit_lt_ObjectGenericUnion.IAttachmentFile_comma__space__doublequote_id_doublequote__gt_": {
                type: "object",
                properties: {
                    url: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    extension: {
                        type: "string",
                        nullable: true,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "url",
                    "name",
                    "extension"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectGenericUnion.ISaleReview": {
                type: "object",
                properties: {
                    writer: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    answer: {
                        $ref: "#/components/schemas/ObjectGenericUnion.ISaleAnswer.Nullable",
                        "x-typia-required": true
                    },
                    id: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    hit: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    contents: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ObjectGenericUnion.ISaleReview.IContent",
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    },
                    created_at: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "writer",
                    "answer",
                    "id",
                    "hit",
                    "contents",
                    "created_at"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectGenericUnion.ISaleReview.IContent": {
                type: "object",
                properties: {
                    score: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    id: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    created_at: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    title: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    body: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    files: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/Omit_lt_ObjectGenericUnion.IAttachmentFile_comma__space__doublequote_id_doublequote__gt_",
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "score",
                    "id",
                    "created_at",
                    "title",
                    "body",
                    "files"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);