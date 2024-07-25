
export function load({ cookies }) {
    //cookies.delete("access_token", { path: "/" })
    
    return {
        message: "Index page"
    }
    
}

export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData()
        
        locals.category = data.get('category')
        locals.q = data.get('q')
	}
}