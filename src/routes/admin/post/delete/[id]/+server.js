import postDb from "$lib/db/post.js"
import { redirect } from 'sveltekit-flash-message/server';

export async function GET({ locals, params, cookies }){
    locals.params = params

    const post = await postDb.getPost(locals)
    if(post.author !== locals.user.userId){
        redirect('/admin/post', { type: 'error', message: 'អ្នក​​មិន​អាច​លុប​ការផ្សាយ​របស់​អ្នក​ដទៃ​បាន​ឡើយ' }, cookies)
    }
    
    await postDb.deletePost(locals)
    redirect('/admin/post', { type: 'success', message: 'លុប​បាន​ដោយ​ជោគជ័យ' }, cookies)
}