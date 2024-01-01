import connectToTheDatabase from "@/app/lib/db";
import TodoModel from "@/app/models/todoModel";
import { NextRequest, NextResponse } from "next/server";


interface Params {
    id: string;
}

export async function PUT(req: NextRequest, { params }: { params: Params }) {


    await connectToTheDatabase();

    const isDone = await req.json();

    const updatedTodo = await TodoModel.findByIdAndUpdate(params.id, { isDone: isDone });

    if (!updatedTodo) {
        return NextResponse.json("Unknown Todo", { status: 404 })
    }
    return NextResponse.json(updatedTodo, { status: 201 })
}
export async function DELETE(req: NextRequest, { params }: { params: Params }) {


    await connectToTheDatabase();

    const deletedTodo = await TodoModel.findByIdAndDelete(params.id);

    if (!deletedTodo) {
        return NextResponse.json("Unknown Todo", { status: 404 })
    }
    return NextResponse.json(deletedTodo, { status: 201 })
}