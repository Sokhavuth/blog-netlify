import userDb from "$lib/db/user.js"
import { json } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'

export async function GET({ locals, params }){
    const user = locals.user
    if(!user){throw redirect(307, '/login')}
    
    locals.body = params
    const settings = await locals.settings(locals)
    const items = await userDb.paginateUsers(locals, settings.dItemLimit)
    return json(items)
}