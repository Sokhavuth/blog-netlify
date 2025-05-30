import postDb from '$lib/db/post.js'

export async function load({ locals, fetch }) {
    const count = await postDb.count(locals)
    const settings = await locals.settings(locals)
    //const posts = await postDb.getPosts(locals, settings.indexPostLimit)
    const latestPosts = await postDb.getLatestPosts(locals, 20)
    const categories = ['movie', 'travel', 'doc', 'sport', 'game', 'food', 'music', 'distraction']
    const postsByCategory = await postDb.getLatestPostByCategory(locals, categories, 20)

    const thumbs = []
    const noImage = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg17xmBAviX5ISk5zO2YOxXoq82qGwP5-8OCZF-8mfUn8efu_-sNvgSUUDDGJZyJ5K9c0phzjr3nQxX00QeYBfw2sW87wSeimc344opJDrISuadlm9p0ROcL0EyhJtdUHymVKnqU-qNicMrMTGv4_fsOsn2xsoJjYoXxRRi1jfqR3r5PfCKYob6_bfA0Bo/s1600/picture.png"
    async function genThumb(){
        for(let items of (postsByCategory)){
            let countThumb = 0 
            for(let item of items){
                countThumb++
                const url = item.thumb
                const res = await fetch(url)
                if(res.status === 200){
                    thumbs.push(url)
                    break
                }else if(countThumb === items.length){
                    thumbs.push(noImage)
                }
            }
        }

        return {count, settings, latestPosts, postsByCategory, thumbs, pageURL, title}
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