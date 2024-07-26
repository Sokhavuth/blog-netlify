import postDb from "$lib/db/post.js"
import { redirect } from '@sveltejs/kit'

export async function load({ params, locals }){
    const user = locals.user
    if(!user){
        throw redirect(307, '/login')
    }
    locals.params  = params
    
    const count = await postDb.count(locals)
    const settings = await locals.settings()
    const post = await postDb.getPost(locals)
    const pageNumber = Math.ceil(count/settings.dItemLimit)
    const items = await postDb.getPosts(locals, settings.dItemLimit)

    return {user, count, post, items, info:"ការផ្សាយ", type:"post", pageNumber}
}