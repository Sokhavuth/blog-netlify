import pageDb from "$lib/db/page.js"
import postDb from "$lib/db/post.js"

export async function load({ locals, params }){
    locals.params = params

    const settings = await locals.settings(locals)
    const page = await pageDb.getPage(locals)
    const categories = ['Khmer', 'Thai', 'Chinese', 'Korean', 'travel']
    const postsByCategory = await postDb.getfirstPostByCategory(locals, categories)
    const randomPosts = await postDb.getRandomPosts(locals, 3, postsByCategory[0])
    const thumb = page.thumb
    const title = page.title

    let pageURL
    if(page.id === '1b93fb18-bfa7-466b-bf78-66d0e0a0e8d0'){
        pageURL = 'contact'
    }else if(page.id === '6be44d51-9d45-453f-b747-d7155a68d3b8'){
        pageURL = 'about'
    }
    
    return {page, randomPosts, postsByCategory, settings, thumb, title, pageURL}
}