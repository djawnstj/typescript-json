import TSON from "../../../../src";
import { TagFormat } from "../../../structures/TagFormat";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_TagFormat = 
    _test_application("swagger")(
        "TagFormat",
        TSON.application<[TagFormat], "swagger">(),{schemas: [
        {
            $ref: "#/components/schemas/TagFormat"
        }
    ],
    components: {
        schemas: {
            TagFormat: {
                type: "object",
                properties: {
                    uuid: {
                        type: "string",
                        nullable: false,
                        "x-typia-metaTags": [
                            {
                                kind: "format",
                                value: "uuid"
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "format",
                                text: [
                                    {
                                        text: "uuid",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        format: "uuid"
                    },
                    email: {
                        type: "string",
                        nullable: false,
                        description: "Email address",
                        "x-typia-metaTags": [
                            {
                                kind: "format",
                                value: "email"
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "format",
                                text: [
                                    {
                                        text: "email",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        format: "email"
                    },
                    url: {
                        type: "string",
                        nullable: false,
                        description: "URL address.",
                        "x-typia-metaTags": [
                            {
                                kind: "format",
                                value: "url"
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "format",
                                text: [
                                    {
                                        text: "url",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        format: "url"
                    },
                    ipv4: {
                        type: "string",
                        nullable: false,
                        description: "IPv4 address.",
                        "x-typia-metaTags": [
                            {
                                kind: "format",
                                value: "ipv4"
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "format",
                                text: [
                                    {
                                        text: "ipv4",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        format: "ipv4"
                    },
                    ipv6: {
                        type: "string",
                        nullable: false,
                        description: "IPv6 address.",
                        "x-typia-metaTags": [
                            {
                                kind: "format",
                                value: "ipv6"
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "format",
                                text: [
                                    {
                                        text: "ipv6",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        format: "ipv6"
                    },
                    custom: {
                        type: "string",
                        nullable: false,
                        description: "A custom format string.",
                        "x-typia-jsDocTags": [
                            {
                                name: "format",
                                text: [
                                    {
                                        text: "my-custom-format",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        format: "my-custom-format"
                    }
                },
                nullable: false,
                required: [
                    "uuid",
                    "email",
                    "url",
                    "ipv4",
                    "ipv6",
                    "custom"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);