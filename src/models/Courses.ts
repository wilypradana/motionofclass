import mongoose, { Schema } from "mongoose";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";

// Create a more flexible schema that can handle all your courses
const CourseSchema = new Schema(
  {
    matkul: String,
    sks: Number,
    materi: [
      {
        pertemuan: { type: Schema.Types.Mixed, required: false },
        description: String,
        link: String,
      },
    ],
  },
  {
    timestamps: true,
    collection: "Courses",
  },
);

// Create the model
const Course =
  mongoose.models.Courses || mongoose.model("Courses", CourseSchema);

export default Course;
