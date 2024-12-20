import { redirect } from 'next/navigation'
import clientPromise from '../lib/mongodb'

export default async function Page({ params }) {
    const url = (await params).url

    const client = await clientPromise
    const db = client.db('BITLinks')
    const collection = db.collection('urls')

    const doc = await collection.findOne({ shortUrl: url })

    if(doc)
    {
        redirect(doc.url)   
    }else{
        redirect(`${process.env.NEXT_PUBLIC_HOST_URL}/`)
    }
    return <div>My Post: {url}</div>
}