import postDb from "$lib/db/post.js"
import { json } from '@sveltejs/kit'

export async function GET({ locals, params }){
    locals.body = params
    const settings = await locals.settings()
    const items = await postDb.paginatePosts(locals, settings.dItemLimit)
    return json(items)
}