import postDb from '$lib/db/post.js'

export async function load({ locals, fetch }) {
    const count = await postDb.count(locals)
    const settings = await locals.settings(locals)
    const posts = await postDb.getPosts(locals, settings.indexPostLimit)
    const latestPosts = await postDb.getLatestPosts(locals, 20)
    const categories = ['movie', 'travel', 'doc', 'sport', 'game', 'food', 'music', 'distraction']
    const postsByCategory = await postDb.getLatestPostByCategory(locals, categories, 20)

    const thumbs = []
    async function genThumb(){
        for(let items of (postsByCategory)){
            for(let item of items){
                const url = item.thumb
                const res = await fetch(url)
                if(res.status === 200){
                    thumbs.push(url)
                    break
                }
            }
        }
        
        return {posts, count, settings, latestPosts, postsByCategory, thumbs, pageURL, title}
    }
    
    const pageURL = '/'
    const title = 'ទំព័រដើម'

    return genThumb()
}

export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData()
        
        locals.category = data.get('category')
        locals.q = data.get('q')
	}
}