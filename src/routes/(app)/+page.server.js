import postDb from '$lib/db/post.js'

export async function load({ locals }) {
    const count = await postDb.count(locals)
    const settings = await locals.settings(locals)
    const posts = await postDb.getPosts(locals, settings.indexPostLimit)
    const latestPosts = await postDb.getLatestPosts(locals, 20)
    const categories = ['movie', 'travel', 'doc', 'sport', 'game']
    const postsByCategory = await postDb.getLatestPostByCategory(locals, categories, 20)
    const pageURL = '/'
    const title = 'ទំព័រដើម'

    return {posts, count, settings, latestPosts, postsByCategory, pageURL, title}
}

export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData()
        
        locals.category = data.get('category')
        locals.q = data.get('q')
	}
}