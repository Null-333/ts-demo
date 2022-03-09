interface Post {
    title: string;
    content: string;
    subtitle?: string; // 可选
    readonly summary: string;
}

function printPost(post: Post) {
    console.log('====-8', post.title);
    console.log('====-8', post.content);
}

const hi: Post = {
    title: 'Hello Typescript',
    content: 'Typescript is a js superset',
    summary: 'test',
};

printPost(hi);

interface Cache {
    [key: string]: string
}
const _cache: Cache = {};