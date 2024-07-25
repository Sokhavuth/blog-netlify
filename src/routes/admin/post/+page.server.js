import { redirect } from '@sveltejs/kit'
import { error } from '@sveltejs/kit'
import postDb from "$lib/db/post.js"
import { setFlash } from 'sveltekit-flash-message/server'
import { page } from '$app/stores'

export async function load({ locals }) {
	const user = locals.user
    const count = await postDb.count(locals) 
    const settings = await locals.settings()
    const pageNumber = Math.ceil(count/settings.dItemLimit)
    const items = await postDb.getPosts(locals, settings.dItemLimit)

    if(!user){
        throw redirect(307, '/login')
    }

    return {user, count, items, info:"ការផ្សាយ", type:"post", pageNumber}
}

export const actions = {
	create: async ({ request, locals, cookies }) => {
		const data = await request.formData()
        
        const title = data.get('title')
        const content = data.get('content')
        const categories = data.get('categories')
        const thumb = data.get("thumb")
        const datetime = data.get("datetime")
        const videos = data.get("videos")

        const validate = (
            typeof title === 'string' &&
            typeof content === 'string' &&
            typeof categories === 'string' &&
            typeof thumb === 'string' &&
            typeof datetime === 'string' &&
            typeof videos === 'string'
        )
        
		if(validate){
            locals.body = {title, content, categories, thumb, datetime, videos}
            await postDb.createPost(locals)
            const token = {}
            token.message = 'ការផ្សាយ​មួយ​ត្រូវ​បាន​បង្កើត​ឡើង!'
            setFlash({ type: 'success', message: 'ការផ្សាយ​មួយ​ត្រូវ​បាន​បង្កើត​ឡើង!' }, cookies)
        }else{
            throw error(420, "ទិន្នន័យ​បញ្ជូន​មក​មិន​ត្រឹមត្រូវ​ទេ!")
        }
	},

    update: async ({ request, locals, cookies }) => {
        const data = await request.formData()

        const params = {}
        params.id = data.get('id')
        locals.params = params

        if(data.get('author') !== locals.user.userId){
            setFlash({ type: 'error', message: 'អ្នក​មិន​អាច​កែប្រែ​ការផ្សាយ​របស់អ្នក​ដទៃ​បាន​ឡើយ!' }, cookies)
            return
        }

        const title = data.get('title')
        const content = data.get('content')
        const categories = data.get('categories')
        const thumb = data.get("thumb")
        const datetime = data.get("datetime")
        const videos = data.get("videos")

        const validate = (
            typeof title === 'string' &&
            typeof content === 'string' &&
            typeof categories === 'string' &&
            typeof thumb === 'string' &&
            typeof datetime === 'string' &&
            typeof videos === 'string'
        )
        
	    if(validate){
            locals.body = {title, content, categories, thumb, datetime, videos}
            await postDb.updatePost(locals)
            setFlash({ type: 'success', message: 'ការ​កែប្រែ​​សំរេច​បាន​ដោយ​ជោគជ័យ' }, cookies)
        }else{
            throw error(420, "ទិន្នន័យ​បញ្ជូន​មក​មិន​ត្រឹមត្រូវ​ទេ!")
        }
    }

}