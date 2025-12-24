import type { ComponentRegistryEntry } from "./types.js";

export const registryData: ComponentRegistryEntry[] = [
    {
        "name": "cms-img",
        "props": [
            {
                "name": "src",
                "type": "string",
                "optional": false
            },
            {
                "name": "alt",
                "type": "string",
                "optional": false
            },
            {
                "name": "width",
                "type": "number",
                "optional": false
            },
            {
                "name": "height",
                "type": "number",
                "optional": false
            }
        ],
        "safeName": "cms_img"
    },
    {
        "name": "test-comp",
        "props": [
            {
                "name": "foo",
                "type": "string",
                "optional": false,
                "description": "A string property.",
                "defaultValue": "Hello World",
                "jsDocTags": [
                    {
                        "tagName": "default",
                        "text": "Hello World"
                    }
                ]
            },
            {
                "name": "bar",
                "type": "number",
                "optional": false,
                "description": "A number property.",
                "defaultValue": "42",
                "jsDocTags": [
                    {
                        "tagName": "default",
                        "text": "42"
                    }
                ]
            },
            {
                "name": "baz",
                "type": "`${string}-${string}-${string}.${number}`",
                "optional": false,
                "description": "Example Template literal",
                "defaultValue": "foo-bar-baz.42",
                "jsDocTags": [
                    {
                        "tagName": "default",
                        "text": "foo-bar-baz.42"
                    }
                ]
            }
        ],
        "safeName": "test_comp"
    }
]