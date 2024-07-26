import { redirect } from 'sveltekit-flash-message/server'

export function GET({ cookies }){
    cookies.delete("access_token", { path: "/" })
    redirect(307, '/login')
}