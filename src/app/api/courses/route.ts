import mongoose from 'mongoose';
import Course from "@/models/Courses";
import dbConnect from "../../../../lib/mongodb";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        const courseData = await request.json();
        
        await dbConnect();
        
        if (Array.isArray(courseData)) {
            await Course.insertMany(courseData);
            return NextResponse.json({ message: "Multiple courses created" }, { status: 200 });
        } else {
            const newCourse = new Course(courseData);
            await newCourse.save();
            return NextResponse.json({ message: "Course created" }, { status: 200 });
        }
    } catch (error) {
        console.error("Error creating course:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
export async function GET() {
    try {
        await dbConnect();
        const db = mongoose.connection.db;

        const courses = await db.collection('Courses').find({}).toArray();

        return NextResponse.json({ message: "Data found", data: courses }, { status: 200 });
    } catch (error) {
        console.error("Error fetching courses:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


