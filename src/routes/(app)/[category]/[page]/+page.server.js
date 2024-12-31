import postDb from "$lib/db/post.js"

export async function load({ locals, params }){
    locals.params = params

    const query = {where: { categories: { contains: params.category }}}
    const count = await postDb.count(locals, query)
    const settings = await locals.settings(locals)
    const posts = await postDb.paginatePostsByCategory(locals, settings.categoryPostLimit)
    const currentPage = params.page
    const category = params.category
    const lastPage = Math.ceil(count/settings.categoryPostLimit)
    const title = category

    let pageURL
    if(params.category === 'news'){
        pageURL = 'news'
    }else if(params.category === 'national'){
        pageURL = 'news'
    }else if(params.category === 'global'){
        pageURL = 'news'
    }else if(params.category === 'opinion'){
        pageURL = 'opinion'
    }else if(params.category === 'doc'){
        pageURL = 'doc'
    }else if(params.category === 'sport'){
        pageURL = 'sport'
    }else if(params.category === 'Khmer'){
        pageURL = 'movie'
    }else if(params.category === 'Thai'){
        pageURL = 'movie'
    }else if(params.category === 'Chinese'){
        pageURL = 'movie'
    }else if(params.category === 'Korean'){
        pageURL = 'movie'
    }else if(params.category === 'world'){
        pageURL = 'movie'
    }else if(params.category === 'travel'){
        pageURL = 'travel'
    }else if(params.category === 'game'){
        pageURL = 'game'
    }else if(params.category === 'food'){
        pageURL = 'entertainment'
    }else if(params.category === 'music'){
        pageURL = 'entertainment'
    }else if(params.category === 'distraction'){
        pageURL = 'entertainment'
    }

    return {count, settings, posts, category, currentPage, lastPage, pageURL, title}
}