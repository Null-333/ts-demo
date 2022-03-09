const enum PostStatus {
    Draft = 0,
    unpublish = 1,
    publish = 2,
}
const post = {
    title: 'hello typescript',
    content: 'typescript is typed superset of js',
    status: PostStatus.Draft,
}