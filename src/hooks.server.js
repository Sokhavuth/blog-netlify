import { PrismaClient } from '@prisma/client'
import jwt from "jsonwebtoken"
import { SECRET_KEY } from '$env/static/private'
import settings from "$lib/settings.js"

export async function handle({ event, resolve }) {
    const prisma = new PrismaClient()
    event.locals.prisma = prisma
    event.locals.settings = settings

    const token = event.cookies.get('access_token')
    if(token) {
        try{
            const user = jwt.verify(token, SECRET_KEY)
            event.locals.user = user
            return await resolve(event)
        }catch(err){
            console.log(err)
            return await resolve(event)
        }
    }

    return await resolve(event)
}