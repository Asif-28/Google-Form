import dbConnect from "@/config/dbConnect";
import Details from "@/models/details";
// import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req:NextRequest,res:NextResponse)=>{
    await dbConnect();
    try {
        const {
            mcq,
            checkbox,
            shortAnswer,
            paragraph,
            dropdown,
            linerScale,
            multiGrid,
            tickBoxGrid
        } = await req.json();
       const Saved= await Details.create({
            mcq,
            checkbox,
            shortAnswer,
            paragraph,
            dropdown,
            linerScale,
            multiGrid,
            tickBoxGrid
        })
        return NextResponse.json({
            message:"form submit successfully",
            data:Saved
        },
        {
            status:201
        })
    } catch (error) {
      console.log(error)
    }
}