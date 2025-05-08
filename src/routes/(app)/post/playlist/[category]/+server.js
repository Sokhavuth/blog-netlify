import postDb from "$lib/db/post.js"
import { json } from '@sveltejs/kit'

export async function GET({ locals, params }){
    const category = params.category
    const items = await postDb.getRandomPlaylist(locals, 20, category)
    return json(items)
}