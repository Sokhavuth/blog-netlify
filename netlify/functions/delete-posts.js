import prisma from "../../src/lib/db/prisma.js"
import postDb from "../../src/lib/db/post.js"

export default async (req) => {
    const { next_run } = await req.json()
    //postDb.deletePosts(prisma)
    //fetch("/.netlify/functions/delete-posts-background", { method: "POST" })
    console.log("Received event! Next invocation at:", next_run)
}
//daily
export const config = {
    schedule: "@hourly"
}