import categoryDB from "$lib/db/category.js"
import { redirect } from 'sveltekit-flash-message/server'

export async function load({ locals, params }){
    const user = locals.user
    locals.params  = params
    if(!user){throw redirect(307, '/login')}

    const count = await categoryDB.count(locals) 
    const settings = await locals.settings()
    const pageNumber = Math.ceil(count/settings.dItemLimit)
    const category = await categoryDB.getCategory(locals)
    const items = await categoryDB.getCategories(locals, settings.dItemLimit)

    return {user, count, category, items, info:"ជំពូក", type:"category", pageNumber}
}