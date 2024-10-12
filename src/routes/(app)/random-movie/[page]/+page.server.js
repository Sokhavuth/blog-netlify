import postDb from '$lib/db/post.js'

export async function load({ locals, params }) {
    locals.body = params
    const query = {where: { categories: { contains: 'movie' }}}
    const count = await postDb.count(locals, query)
    const settings = await locals.settings(locals)
    const posts = await postDb.getRandomAll(locals, settings.categoryPostLimit)
    const currentPage = parseInt(params.page)
    const lastPage = Math.ceil(count/settings.categoryPostLimit)
    const pageURL = 'movie'
    const title = 'ឥត​ព្រៀង​ទុក'

    return {posts, count, settings, currentPage, lastPage, pageURL, title}
}