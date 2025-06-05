import prisma from "../../src/lib/db/prisma.js"
import postDb from "../../src/lib/db/post.js"

export default async (event, context) => {
    let req = {}
    let thumbs = []
    req.prisma = prisma
    const posts = await postDb.getPosts(req, "all")
    for(let item of posts){
        const url = item.thumb
        const res = await fetch(url)
        if(res.status !== 200){
            thumbs.push(url)
        }
    }
    await postDb.deletePosts(req, thumbs)
    console.log("background function invoked")
}