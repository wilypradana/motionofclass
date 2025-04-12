"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { FlipWords } from "../ui/flip-words";
import Image from "next/image";

export default function Hero() {
  const words = ["rapih", "modern", "lengkap materinya", "nyaman"];
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <div className="h-[40rem] flex justify-center items-center px-4">
              <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                Belajar lebih
                <FlipWords words={words} /> <br />
                dengan website ini
              </div>
            </div>
          </>
        }
      >
        <Image
          src={`https://ui.aceternity.com/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
