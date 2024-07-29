import { redirect } from '@sveltejs/kit'

export function load({ locals }) {
	const user = locals.user
    if(!user){
        throw redirect(307, '/login')//
    }

    return {user: user}
    
}