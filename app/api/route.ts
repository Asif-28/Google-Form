import { NextRequest, NextResponse } from "next/server";
export async function GET(request:NextRequest){

    try {
        return NextResponse.json({
            message: "Connected to server",
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}