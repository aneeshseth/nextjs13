import connectMongoDB from "@/libs/db";
import Topic from "@/models/topic";
import {NextResponse} from 'next/server'
export async function PUT(request, {params}) {
    const {id} = params;
    const {newTitle: title, newDescription: description} = await request.json()
    await connectMongoDB()
    await Topic.findByIdAndUpdate(id, {title, description})
    return NextResponse.json({
        message: "topic updated"
    })
}

