import React from 'react'

interface PageProps {
    params: { courseId: string }
}

const page = ({ params }: PageProps) => {
    return (
        <div>
            the course id is {params.courseId}
        </div>
    )
}

export default page