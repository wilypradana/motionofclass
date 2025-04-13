import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import { TextHoverEffect } from "../ui/text-hover-effect";

export function Subjects() {
  const ti = [
    {
      title: "Logika Informatika",
      description:
        "3 SKS — Pengertian Proposisi, Analisis Logika Proposisional, Analisis Kebenaran Pernyataan, Proposisi Implikasi dan Biimplikasi.",
      link: "http://localhost:3000/teknik-informatika/67fbb83b2fa09622d78d5f0c",
    },
    {
      title: "Pengantar Teknologi Informasi",
      description:
        "2 SKS — Pengenalan Komputer, CPU, Memori, Media Penyimpanan, Biner dan Oktal.",
      link: "http://localhost:3000/teknik-informatika/67fbb83b2fa09622d78d5f11",
    },
    {
      title: "Algoritma dan Pemrograman",
      description:
        "2 SKS — Flowchart, Pseudo Code, Software, C++ dan Flowchart.",
      link: "http://localhost:3000/teknik-informatika/67fbb83b2fa09622d78d5f16",
    },
  ];

  return (
    <div className="subjects">
      <div className="h-44 flex items-center justify-center">
        <TextHoverEffect text="TI" />
      </div>

      <div className="grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <HoverEffect items={ti} />
      </div>
    </div>
  );
}
