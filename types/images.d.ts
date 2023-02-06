export default interface Image{
    data:{
        attributes:{
            formats:{
                large:{
                    url: string;
                }
            },
            url: string
        }
    }
}

const imageResponse = {
    "id": 1,
    "attributes": {
        "content": "Aplicação simulando formulário, onde o usuário escolhe o plano que deseja usar na plataforma, podendo escolher entre plano anual ou mensal. Desenvolvido com Vue, Vuex e Bootstrap.",
        "createdAt": "2023-01-30T01:23:04.415Z",
        "updatedAt": "2023-01-30T01:23:26.204Z",
        "publishedAt": "2023-01-30T01:23:26.198Z",
        "image": {
            "data": {
                "id": 1,
                "attributes": {
                    "name": "multi step.png",
                    "alternativeText": null,
                    "caption": null,
                    "width": 1226,
                    "height": 588,
                    "formats": {
                        "large": {
                            "ext": ".png",
                            "url": "https://res.cloudinary.com/dc7iitoaq/image/upload/v1675041763/large_multi_step_ace6084526.png",
                            "hash": "large_multi_step_ace6084526",
                            "mime": "image/png",
                            "name": "large_multi step.png",
                            "path": null,
                            "size": 64.56,
                            "width": 1000,
                            "height": 480,
                            "provider_metadata": {
                                "public_id": "large_multi_step_ace6084526",
                                "resource_type": "image"
                            }
                        },
                        "small": {
                            "ext": ".png",
                            "url": "https://res.cloudinary.com/dc7iitoaq/image/upload/v1675041763/small_multi_step_ace6084526.png",
                            "hash": "small_multi_step_ace6084526",
                            "mime": "image/png",
                            "name": "small_multi step.png",
                            "path": null,
                            "size": 24.91,
                            "width": 500,
                            "height": 240,
                            "provider_metadata": {
                                "public_id": "small_multi_step_ace6084526",
                                "resource_type": "image"
                            }
                        },
                        "medium": {
                            "ext": ".png",
                            "url": "https://res.cloudinary.com/dc7iitoaq/image/upload/v1675041763/medium_multi_step_ace6084526.png",
                            "hash": "medium_multi_step_ace6084526",
                            "mime": "image/png",
                            "name": "medium_multi step.png",
                            "path": null,
                            "size": 43.62,
                            "width": 750,
                            "height": 360,
                            "provider_metadata": {
                                "public_id": "medium_multi_step_ace6084526",
                                "resource_type": "image"
                            }
                        },
                        "thumbnail": {
                            "ext": ".png",
                            "url": "https://res.cloudinary.com/dc7iitoaq/image/upload/v1675041763/thumbnail_multi_step_ace6084526.png",
                            "hash": "thumbnail_multi_step_ace6084526",
                            "mime": "image/png",
                            "name": "thumbnail_multi step.png",
                            "path": null,
                            "size": 9.49,
                            "width": 245,
                            "height": 118,
                            "provider_metadata": {
                                "public_id": "thumbnail_multi_step_ace6084526",
                                "resource_type": "image"
                            }
                        }
                    },
                    "hash": "multi_step_ace6084526",
                    "ext": ".png",
                    "mime": "image/png",
                    "size": 15.32,
                    "url": "https://res.cloudinary.com/dc7iitoaq/image/upload/v1675041763/multi_step_ace6084526.png",
                    "previewUrl": null,
                    "provider": "cloudinary",
                    "provider_metadata": {
                        "public_id": "multi_step_ace6084526",
                        "resource_type": "image"
                    },
                    "createdAt": "2023-01-30T01:22:44.070Z",
                    "updatedAt": "2023-01-30T01:22:44.070Z"
                }
            }
        },
        "comments": {
            "data": [
                {
                    "id": 2,
                    "attributes": {
                        "content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                        "user": "Kent Dodds",
                        "user_avatar": "https://bit.ly/kent-c-dodds",
                        "likes": 1,
                        "createdAt": "2023-01-30T13:51:22.827Z",
                        "updatedAt": "2023-02-03T13:55:08.397Z",
                        "publishedAt": "2023-01-30T13:51:22.817Z"
                    }
                },
                {
                    "id": 1,
                    "attributes": {
                        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                        "user": "Dan Abramov",
                        "user_avatar": "https://bit.ly/dan-abramov",
                        "likes": 4,
                        "createdAt": "2023-01-30T13:13:10.550Z",
                        "updatedAt": "2023-02-03T14:05:53.185Z",
                        "publishedAt": "2023-01-30T13:13:15.148Z"
                    }
                },
                {
                    "id": 3,
                    "attributes": {
                        "content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                        "user": "Kent Dodds",
                        "user_avatar": "https://bit.ly/kent-c-dodds",
                        "likes": null,
                        "createdAt": "2023-02-03T14:24:38.557Z",
                        "updatedAt": "2023-02-03T14:24:38.557Z",
                        "publishedAt": "2023-02-03T14:24:38.547Z"
                    }
                }
            ]
        }
    }
}