import prisma from "../../src/lib/db/prisma.js"
import postDb from "../../src/lib/db/post.js"

export default async (req) => {
    const { next_run } = await req.json()
    let request = {}
    let thumbs = []
    request.prisma = prisma
    const posts = await postDb.getPosts(request, "all")
    for(let item of posts){
        const url = item.thumb
        const res = await fetch(url)
        if(res.status !== 200){
            thumbs.push(url)
        }
    }
    console.log(thumbs.length)
    await postDb.deletePosts(request, thumbs)
    //fetch("https://khmerweb-live.netlify.app/.netlify/functions/delete-posts-background", { method: "POST" })
    console.log("Received event! Next invocation at:", next_run)
}
//daily
export const config = {
    schedule: "@hourly"
}