import postDb from '$lib/db/post.js'

export async function load({ locals, params }) {
    locals.body = params
    const count = await postDb.count(locals)
    const settings = await locals.settings(locals)
    const posts = await postDb.paginatePosts(locals, settings.categoryPostLimit)
    const currentPage = parseInt(params.page)
    const lastPage = Math.ceil(count/settings.categoryPostLimit)
    const pageURL = '/page'

    return {posts, count, settings, currentPage, lastPage, pageURL}
}