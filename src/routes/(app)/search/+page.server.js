import postDb from "$lib/db/post.js"

export async function load({ locals }){
    const settings = await locals.settings(locals)
    const categories = ['Khmer', 'Thai', 'Chinese', 'Korean', 'travel']
    const postsByCategory = await postDb.getfirstPostByCategory(locals, categories)
    const title = 'ទំព័រ​ស្វែង​រក'
    const posts = locals.posts
    
    return {posts, postsByCategory, settings, title}
}

export const actions = {
    search: async ({ locals, request }) => {
        const data = await request.formData()
        const categoryKhmer = data.get('category')
        const q = data.get('q')

        const categories = {
            'រឿងខ្មែរ': 'Khmer',
            'រឿងថៃ': 'Thai',
            'រឿងចិន': 'Chinese',
            'រឿងកូរ៉េ': 'Korean',
            'ដើរ​​លេង': 'travel',
            'ព័ត៌មាន': 'news'
        }

        const category = categories[categoryKhmer]
        if(category === "ទាំងអស់"){
            locals.body = {q}
        }else{
            locals.body = {category, q}
        }

        locals.posts = await postDb.searchPosts(locals, 20)
    }
}