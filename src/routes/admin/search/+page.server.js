import { redirect } from '@sveltejs/kit'

export function load({ locals }) {
	const user = locals.user
    if(!user){
        throw redirect(307, '/login')
    }

    return {user: user}
}

export const actions = {
	search: async ({ request, locals }) => {
		const data = await request.formData()
        
        locals.category = data.get('category')
        locals.q = data.get('q')
		console.log(locals.q)
	}
}