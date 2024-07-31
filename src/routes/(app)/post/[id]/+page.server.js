import postDb from "$lib/db/post.js"
import userDb from "$lib/db/user.js"

export async function load({ locals, params }){
    locals.params = params

    const settings = await locals.settings(locals)
    const post = await postDb.getPost(locals)
    locals.params.id = post.author
    const author = await userDb.getUser(locals)
    const randomPosts = []
    
    return {post, randomPosts, settings, author}
}