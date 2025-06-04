
export default async (req) => {
    const { next_run } = await req.json()

    fetch("/.netlify/functions/delete-posts-background", { method: "POST" })
    console.log("Received event! Next invocation at:", next_run)
}

export const config = {
    schedule: "@hourly"
}