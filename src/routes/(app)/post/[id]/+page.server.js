import postDb from "$lib/db/post.js"
import userDb from "$lib/db/user.js"

export async function load({ locals, params }){
    locals.params = params

    const settings = await locals.settings(locals)
    const post = await postDb.getPost(locals)
    locals.params.id = post.author
    const author = await userDb.getUser(locals)
    const authorName = author.title
    const categories = ['Khmer', 'Thai', 'Chinese', 'Korean', 'travel']
    const postsByCategory = await postDb.getfirstPostByCategory(locals, categories)
    const randomPosts = await postDb.getRandomPosts(locals, 5, post)
    const thumb = post.thumb
    const title = post.title
    
    return {post, randomPosts, postsByCategory, settings, authorName, thumb, title}
}