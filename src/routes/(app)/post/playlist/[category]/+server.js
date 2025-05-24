import postDb from "$lib/db/post.js"
import { json } from '@sveltejs/kit'

export async function POST({ request, locals, params }){
    const category = params.category
    const { thumbs } = await request.json()
    const items = await postDb.getRandomPlaylist(locals, 20, category, thumbs)
    return json(items)
}