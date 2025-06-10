import client from '../../src/lib/db/mongo.js'

export default async (req, context) => {
    try {
        await client.connect()
        console.log("Connected successfully to server")
        const db = client.db("blog")
        const collection = db.collection("Post")
        const posts = await collection.aggregate([{$sample:{ size: 20000 }}]).toArray()
        let thumbs = []
        const response = await fetch('https://www.youtube.com')
        if((posts.length)&&(response.ok)){
            for(let item of posts){
                const url = item.thumb
                const res = await fetch(url)
                if(!res.ok){
                    thumbs.push(url)
                }
            }
        }
        const result = await collection.deleteMany({thumb: {$in: thumbs}})
        console.log(result)
     } catch (err) {
        console.error("Error connecting to the database:", err)
     } finally {
        await client.close()
     }
}
