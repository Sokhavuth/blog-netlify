//models/post.js

class Post{
    async count(req, query={}){
        return await req.prisma.post.count(query)
    }

    async createPost(req){
        let new_post = {}

        if(req.body.categories.includes('news')){
            new_post = {
                title: req.body.title,
                content: req.body.content,
                categories: req.body.categories,
                thumb: req.body.thumb,
                date: req.body.datetime,
                videos: req.body.videos,
                author: req.user.id,
                createdAt: new Date(),
            }
       
        }else{ 
            new_post = {
                title: req.body.title,
                content: req.body.content,
                categories: req.body.categories,
                thumb: req.body.thumb,
                date: req.body.datetime,
                videos: req.body.videos,
                author: req.user.id,
            }
        }
        
        await req.prisma.post.create({ data: new_post })
    }

    async getPosts(req, amount){
        if(amount === "all"){
            return await req.prisma.post.findMany({ 
                orderBy: [{ date: "desc" }, { id: "desc" }],
            })
        }
        
        return await req.prisma.post.findMany({ 
            take: amount, 
            orderBy: [{ date: "desc" }, { id: "desc" }],
        })
    }

    async searchPosts(req, amount){
        let query
        if(req.body.category){
            query = [
                { title: { contains: req.body.q, mode: 'insensitive' } },
                { categories: { contains: req.body.category } }
            ]
        }else{
            query = [
                { title: { contains: req.body.q, mode: 'insensitive' } }
            ]
        }
        
        return await req.prisma.post.findMany({ 
            where: { AND: query },
            take: amount,
            orderBy: [{ date: "desc" }],
        })
    }

    async getPostsByCategory(req, amount){
        return await req.prisma.post.findMany({ 
            where: { categories: { has: req.params.category } },
            take: amount, 
            orderBy: [{ date: "desc" }],
        })
    }

    async getPost(req){
        return await req.prisma.post.findUnique({ where: {id: req.params.id }})
    }

    async updatePost(req){
        let newvalue = {
            title: req.body.title,
            content: req.body.content,
            categories: req.body.categories,
            thumb: req.body.thumb,
            date: req.body.datetime,
            videos: req.body.videos
        }
     
        await req.prisma.post.update({ where: {id: req.params.id }, data: newvalue })
    }

    async deletePost(req){
        await req.prisma.post.delete({ where: {id: req.params.id } })
    }

    async deletePosts(req, thumbs){
        //const posts = await req.prisma.post.findMany()
        await req.prisma.post.deleteMany({ where: {thumb: {in: thumbs} }})
    }

    async paginatePosts(req, amount){
        let page
        if(req.body.page){
            page = parseInt(req.body.page)
        }else if(req.query.page){
            page = parseInt(req.query.page)-1
        }
        
        const posts = await req.prisma.post.findMany({ 
            orderBy: [{ date: "desc" }],
            skip: amount * (page-1),
            take: amount,
        })

        return posts
    }

    async paginatePostsByCategory(req, amount){
        const posts = await req.prisma.post.findMany({ 
            where: { categories: { contains: req.params.category } },
            orderBy: [{ date: "desc" }],
            skip: amount * (parseInt(req.params.page)-1),
            take: amount,
        })

        return posts
    }

    async getLatestPosts(req, amount){    
        return await req.prisma.post.findMany({ 
            where: { AND: [{NOT: {videos: "" }} , {NOT: {categories: { contains: "unavailable" }}}, {categories: { contains: "news" }}] },
            take: amount, 
            orderBy: [{ date: "desc" }],
        })
    }

    async getLatestPostByCategory(req, categories, amount){
        const posts = []
        for(let category of categories){
            /*
            posts.push(await req.prisma.post.findMany({
                where: {AND: [{ categories: { contains: category } }, {NOT: {categories: { contains: "unavailable" }}}, {NOT: {videos: "" }}]},
                orderBy: [{ date: "desc" }],
                take: amount,
            }))
            */
            let playlist = await req.prisma.post.aggregateRaw({
                pipeline: [{ $match : { $and: [{categories: { $regex: category }}, {videos: { $ne: "" }}, { categories: {$not: { $regex: "unavailable" }} } ] }}, { $sample:{ size: amount }}]
            })
            
            posts.push(playlist)
        }

        return posts
    }

    async getRandomPosts(req, amount, post){
        let results
        if(post.categories.includes('news')){
            if(post.categories.includes('doc')){
                results = await req.prisma.post.aggregateRaw({
                    pipeline: [{ $match : { categories:{ $regex: "doc" }, _id: {$ne: {$oid: post.id}}}}, { $sample:{ size: amount }}]
                })
            }else{
                results = await req.prisma.post.aggregateRaw({
                    pipeline: [{ $match : { categories:{ $regex: "news" }, _id: {$ne: {$oid: post.id}}}}, { $sort: { date : -1 } }, { $limit: amount }]
                })
            }
        }else{
            let category = ''
            if(post.categories.includes(',')){
                let str = post.categories.split(',')
                category = str[0]
            }else{
                category = post.categories
            }

            results = await req.prisma.post.aggregateRaw({
                pipeline: [{ $match : {categories : { $regex: category }, _id: {$ne: {$oid: post.id}}} }, { $sample:{ size: amount }}]
            })
        }
       
        return results
    }

    async getRandomAll(req, amount){
        const results = await req.prisma.post.aggregateRaw({
            pipeline: [{ $match : { categories : { $regex: 'movie' } } }, { $sample:{ size: amount }}]
        })

        return results
    }

    async getRandomPlaylist(req, amount, category, thumbs){
        const results = await req.prisma.post.aggregateRaw({
            pipeline: [{ $match : { categories : { $regex: category, $not: { $regex: "unavailable" } } , thumb: {$nin: thumbs}, videos: { $ne: "" } } }, { $sample:{ size: amount }}]
        })

        return results
    }

    async createIndexes(req){
        await req.prisma.$runCommandRaw({
            createIndexes: 'Post',
            indexes: [
              {
                key: {
                  createdAt: 1,
                },
                name: 'createdAt_ttl_index',
                expireAfterSeconds: 60*60*24*30*3,
              },
            ],
        })
    }
}

export default new Post()