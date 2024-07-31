import postDb from "$lib/db/post.js"

export async function load({ locals, params }){
    locals.params = params

    const query = {where: { categories: { contains: params.category }}}
    const count = await postDb.count(locals, query)
    const settings = await locals.settings(locals)
    const posts = await postDb.paginatePostsByCategory(locals, settings.categoryPostLimit)
    const currentPge = params.page
    const category = params.category
    const lastPage = Math.ceil(count/settings.categoryPostLimit)

    return {count, settings, posts, category, currentPge, lastPage}
}