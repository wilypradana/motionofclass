"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Courses from "@/components/defaultUi/courses";
import { FloatingDock } from "@/components/defaultUi/dock";
import { TextGenerateEffectSection } from "@/components/defaultUi/text-generate";
import { BASE_API_URL } from "../../../../utils/constant";

export default function Page() {
  const params = useParams();
  const slug = params.slug;
  const [courseList, setCourseList] = useState<any>(null);
  const ref = useRef(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/api/ti/${slug}`);
        setCourseList(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCourse();
  }, [slug]);

  if (!courseList || !courseList.data) return <div>Loading...</div>;

  const datas = courseList.data;

  return (
    <main
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen w-full"
    >
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
          Mata Kuliah:{" "}
          <span className="font-medium text-primary">{datas.matkul}</span>
        </h1>
        <h2 className="text-lg text-neutral-600 dark:text-neutral-400">
          SKS: <span className="font-semibold">{datas.sks}</span>
        </h2>
        <TextGenerateEffectSection />
      </div>

      <Courses courseId={datas._id} />
      <FloatingDock />
    </main>
  );
}
