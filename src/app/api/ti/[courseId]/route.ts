import mongoose from "mongoose";
import dbConnect from "../../../../../lib/mongodb";
import { NextResponse } from "next/server";

interface Params {
  courseId: string;
}

export async function GET(
  request: Request,
  context: { params: Params }
) {
  try {
    // ✅ fix params async access
    const params = await Promise.resolve(context.params);
    const courseId = params.courseId;

    await dbConnect();
    const db = mongoose.connection.db;

    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return NextResponse.json(
        { message: "Invalid course ID format" },
        { status: 400 }
      );
    }

    const objectId = new mongoose.Types.ObjectId(courseId);
    const course = await db.collection("Courses").findOne({ _id: objectId });

    if (!course) {
      return NextResponse.json(
        { message: "No data found with this ID" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Data found", data: course },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching course:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
