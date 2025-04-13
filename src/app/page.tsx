"use client";
import React from "react";
import HeroSectionOne from "../components/ui/HeroSectionOne";
import Navbar from "../components/defaultUi/navbar";
import { Subjects } from "@/components/defaultUi/subjects";
import { BASE_API_URL } from "../../utils/constant";
export default function Page() {
  if(!BASE_API_URL){
    return null;
  }
  return (
    <div>
      <Navbar></Navbar>
      <HeroSectionOne></HeroSectionOne>
      <Subjects></Subjects>
    </div>
  );
}
