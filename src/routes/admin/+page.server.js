import { redirect } from '@sveltejs/kit'

export function load({ cookies }) {
	const user = cookies.get('user')
    cookies.set('isLogged', 'true', { path: '/' })

    if(!user){
        throw redirect(307, '/login')
    }

    return {
        user
    }
    
}