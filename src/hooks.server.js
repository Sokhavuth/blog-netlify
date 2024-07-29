import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'
import jwt from "jsonwebtoken"
import { SECRET_KEY } from '$env/static/private'
import settings from "$lib/settings.js"

export async function handle({ event, resolve }) {
    const libsql = createClient({
        url: `${process.env.TURSO_DATABASE_URL}`,
        authToken: `${process.env.TURSO_AUTH_TOKEN}`,
    })

    const adapter = new PrismaLibSQL(libsql)
    const prisma = new PrismaClient({ adapter })

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