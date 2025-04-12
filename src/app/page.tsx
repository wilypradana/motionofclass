"use client";
import React from "react";
import Hero from "../components/defaultUi/hero";
import Navbar from "../components/defaultUi/navbar";
import { Subjects } from "@/components/defaultUi/subjects";
export default function Page() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Subjects></Subjects>
    </div>
  );
}
