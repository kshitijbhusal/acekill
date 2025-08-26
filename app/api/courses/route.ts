import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const prisma = new PrismaClient();

    // Read query params
    const category = req.nextUrl.searchParams.get('category');
    const priceMin = req.nextUrl.searchParams.get('priceMin');
    const priceMax = req.nextUrl.searchParams.get('priceMax');

    // Build dynamic `where` object
    const where: any = {};

    if (category) {
        where.category = category;
    }

    if (priceMin || priceMax) {
        where.price = {};
        if (priceMin) where.price.gte = Number(priceMin);
        if (priceMax) where.price.lte = Number(priceMax);
    }

    const res = await prisma.course.findMany();

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

