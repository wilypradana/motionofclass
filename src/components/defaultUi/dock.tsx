import React from "react";
import { FloatingDock as DockBase } from "@/components/ui/floating-dock";

import {
  IconBrandDiscord,
  IconBrandGithub,
  IconExchange,
  IconHome,
} from "@tabler/icons-react";

export function FloatingDock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://discord.gg/3p3jBAcJZS",
    },
    {
      title: "discord",
      icon: (
        <IconBrandDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://discord.gg/3p3jBAcJZS",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/",
    },
  ];
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50">
      <DockBase items={links} />
    </div>
  );
}
