"use client";
import React from "react";
import HeroSectionOne from "../components/ui/HeroSectionOne";
import Navbar from "../components/defaultUi/navbar";
import { Subjects } from "@/components/defaultUi/subjects";
export default function Page() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSectionOne></HeroSectionOne>
      <Subjects></Subjects>
    </div>
  );
}
