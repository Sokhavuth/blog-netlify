//models/post.js

class Post{
    async count(req, query={}){
        return await req.prisma.post.count(query)
    }

    async createPost(req){
        const new_post = {
            title: req.body.title,
            content: req.body.content,
            categories: req.body.categories,
            thumb: req.body.thumb,
            date: req.body.datetime,
            videos: req.body.videos,
            author: req.user.id,
        }
        
        await req.prisma.post.create({ data: new_post })
    }

    async getPosts(req, amount){
        if(amount === "all"){
            return await req.prisma.post.findMany({ 
                orderBy: [{ date: "desc" }, { id: "desc" }]
            })
        }
        
        return await req.prisma.post.findMany({ 
            take: amount, 
            orderBy: [{ date: "desc" }, { id: "desc" }]
        })
    }

    async searchPosts(req, amount){
        const query = [
            { title: { contains: req.body.q } },
            { content: { contains: req.body.q } },
            { categories: { has: req.body.q } },
        ]
        return await req.prisma.post.findMany({ 
            where: { OR: query },
            take: amount,
            orderBy: [{ date: "desc" }]
        })
    }

    async getPostsByCategory(req, amount){
        return await req.prisma.post.findMany({ 
            where: { categories: { has: req.params.category } },
            take: amount, 
            orderBy: [{ date: "desc" }]
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
            take: amount
        })

        return posts
    }

    async paginatePostsByCategory(req, amount){
        const posts = await req.prisma.post.findMany({ 
            where: { categories: { contains: req.params.category } },
            orderBy: [{ date: "desc" }],
            skip: amount * (parseInt(req.params.page)-1),
            take: amount
        })

        return posts
    }

    async getfirstPostByCategory(req, categories){
        const posts = []
        for(let category of categories){
            posts.push(await req.prisma.post.findFirst({
                where: { categories: { contains: category } },
                orderBy: [{ date: "desc" }]
            }))
        }
    
        return posts
    }

    async getRandomPosts(req, amount, post){
        let sql = ''
        if(post.categories.includes('news')){
            sql = `SELECT * FROM "Post" WHERE ID != "${post.id}" AND categories like "%news%" 
                   ORDER BY DATE desc LIMIT ${amount}`
        }else{
            sql = `SELECT * FROM "Post" WHERE ID != "${post.id}" AND categories not like "%news%" 
                   ORDER BY RANDOM() LIMIT ${amount}`
        }
        const results = await req.prisma.$queryRawUnsafe(sql)

        return results
    }
}

export default new Post()