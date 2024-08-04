import postDb from '$lib/db/post.js'

export async function load({ locals, params }) {
    locals.body = params
    const count = await postDb.count(locals)
    const settings = await locals.settings(locals)
    const posts = await postDb.paginatePosts(locals, settings.categoryPostLimit)
    const categories = ['Khmer', 'Thai', 'Chinese', 'Korean', 'travel']
    const postsByCategory = await postDb.getfirstPostByCategory(locals, categories)
    const currentPage = parseInt(params.page)
    const lastPage = Math.ceil(count/settings.categoryPostLimit)
    const pageURL = '/page'
    const title = settings.siteTitle

    return {posts, postsByCategory, count, settings, currentPage, lastPage, pageURL, title}
}