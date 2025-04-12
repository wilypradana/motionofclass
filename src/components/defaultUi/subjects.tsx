import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import { TextHoverEffect } from "../ui/text-hover-effect";

export function Subjects() {


   const projects = [
    {
      title: "Stripe",
      description:
          "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
          "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
          "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
          "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
          "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
          "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];


  return (
    <div className="subjects">
      <div className="h-44 flex items-center justify-center">
        <TextHoverEffect text="TI" />
      </div>

      <div className="grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

