// 'use server'

export async function getAllPosts() {
    const { posts } = await fetch(`https://dummyjson.com/posts`).then(res => res.json())
    return posts
}