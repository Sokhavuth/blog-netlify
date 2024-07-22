import userDb from '$lib/db/user.js'
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import { SECRET_KEY } from '$env/static/private'
import { redirect } from '@sveltejs/kit'

export const actions = {
	default: async ({ cookies, request, locals }) => {
		const data = await request.formData()
        
        locals.email = data.get('email')
        locals.password = data.get('password')
        
        const user = await userDb.checkUser(locals)
        
        if(user){
            if(bcrypt.compareSync(locals.password, user.password)){
                const data = {userId: user.id, userRole: user.role, userName: user.title}
                const token = jwt.sign(data, SECRET_KEY, {expiresIn: "12h"})
                cookies.set('access_token', token, { path: '/' })
                throw redirect(303, '/admin')
            }else{
                locals.message = 'ពាក្យ​សំងាត់​មិន​ត្រឹមត្រូវ​ទេ'
            }
        }else{
            locals.message = 'Email មិន​ត្រឹមត្រូវទេ'
        }
	}
}

export function load({ locals }) {
    return {
        message: locals.message
    }
    
}