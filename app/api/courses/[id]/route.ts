
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: number } }) {
    const prisma = new PrismaClient()

    const { id } = params;




    const course = await prisma.course.findUnique({
        where: {
            id: Number(id)
        }
    })


    if (!course) {

        return NextResponse.json(
            {
                success: false,
                message: 'No course exist with this id.'
            }
        )
    }

    return NextResponse.json(
        {
            success: true,
            data: course

        }
    )

}