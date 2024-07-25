import postDb from "$lib/db/post.js"

export async function load({ params, locals }){
    locals.params  = params
    const user = locals.user
    const count = await postDb.count(locals)
    const settings = await locals.settings()
    const post = await postDb.getPost(locals)
    const pageNumber = Math.ceil(count/settings.dItemLimit)
    const items = await postDb.getPosts(locals, settings.dItemLimit)

    return {user, count, post, items, info:"ការផ្សាយ", type:"post", pageNumber}
}