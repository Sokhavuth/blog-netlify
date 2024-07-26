import postDb from "$lib/db/post.js"
import { json } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'

export async function GET({ locals, params }){
    const user = locals.user
    if(!user){
        throw redirect(307, '/login')
    }
    
    locals.body = params
    const settings = await locals.settings()
    const items = await postDb.paginatePosts(locals, settings.dItemLimit)
    return json(items)
}