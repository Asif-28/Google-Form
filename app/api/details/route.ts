import dbConnect from '@/config/dbConnect';
import Details from '@/models/details';
import { NextRequest, NextResponse } from "next/server";

dbConnect();

export async function POST(request:NextRequest,response:NextResponse){


    try {
        const reqBody = await request.json();
        const { mcq,
            checkbox,
            shortAnswer,
            paragraph,
            dropdown,
            linerScale,
            multiGrid,
            tickBoxGrid,} = reqBody;
            console.log(reqBody);
            const newUser = new Details({
                mcq,
                checkbox,
                shortAnswer,
                paragraph,
                dropdown,
                linerScale,
                multiGrid,
                tickBoxGrid,
              });
        
              const savedUser = await newUser.save();
              console.log(savedUser);
        return NextResponse.json({
            mesaaage: "Data saved",
            data: savedUser
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}