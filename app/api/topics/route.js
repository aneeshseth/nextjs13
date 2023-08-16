import connectMongoDB from "@/libs/db"
import {NextResponse} from 'next/server'
import Topic from "@/models/topic"

export async function POST(request) {
    const {title, description} = await request.json()
    console.log(title)
    await connectMongoDB()
    await Topic.create({
        title, description
    })
    return NextResponse.json({
        message: 'topic created'
    }, {
        status: 201
    })
}

export async function GET() {
    await connectMongoDB()
    const topics = await Topic.find()
    return NextResponse.json({
        topics: topics
    })
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDB()
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({
        msg: "topic deleted"
    })
}