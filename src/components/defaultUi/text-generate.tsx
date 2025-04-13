"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Kuliah adalah masa mengembangkan diri, setelah itu baru datang masa berkontribusi`;

export function TextGenerateEffectSection() {
  return <TextGenerateEffect words={words} />;
}
