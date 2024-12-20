import clientPromise from "@/app/lib/mongodb"

export async function POST(request) {
    try {
        const body = await request.json()

        const client = await clientPromise
        const db = client.db('BITLinks')
        const collection = db.collection('urls')

        // checking if we get empty input or not
        if(!body.url || !body.shortUrl){
            return Response.json({ success: false, message: "Empty Inputs Please Type Something",shortUrl:"emptyInputs" })
        }

        // checking if the short url exist or not 
        const doc = await collection.find({ $or: [{ shortUrl: body.shortUrl }, { url: body.url }] }).toArray();
        if (doc.length > 0) {
            return Response.json({ success: false, message: "Url already exists",shortUrl:doc[0].shortUrl })
        }

        // Inserting the recieved data into the database 
        await collection.insertOne({
            url: body.url,
            shortUrl: body.shortUrl
        })
        return Response.json({ success: true, message: "ShortUrl Created Successfully" })
    } catch (error) {
        return Response.json({ success: false, message: "Some error occured in server please try after some time", error_msg: error.message,shortUrl:"somethingwrongtryagain" })
    }
}