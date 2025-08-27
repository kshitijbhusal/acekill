import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const prisma = new PrismaClient();

    // Read query params
    const category = req.nextUrl.searchParams.get('category');
    const maxPrice = req.nextUrl.searchParams.get('maxPrice')
    console.log('category is ', category)

    // Build dynamic `where` object
    const where: any = {};

    if (category) {
        where.category = category;
    }

    if (maxPrice) {
        where.price = {
            lte: parseFloat(maxPrice)
        }
    }


    const res = await prisma.course.findMany({
        where
    });

    return NextResponse.json({
        success: true,
        data: res
    });
}








export async function POST(req: NextRequest) {
    const prisma = new PrismaClient()

    const {
        title,
        description,
        category,
        price,
        instructorId
    } = await req.json();   // <-- parses JSON bodycategory

    const res = await prisma.course.create({
        data: {
            title,
            description,
            category,
            price,
            instructorId
        }


    })
    console.log('prisma res is ', res)

    //Create a new course with title, price, description, 

    return NextResponse.json({
        success: true,
        message: "Course created successfully.",
    });
}

