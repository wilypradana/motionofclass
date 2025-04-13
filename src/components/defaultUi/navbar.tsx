"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="TI">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/teknik-informatika/67fbb83b2fa09622d78d5f0c">
              logika informatika 3 SKS
            </HoveredLink>
            <HoveredLink href="/teknik-informatika/67fbb83b2fa09622d78d5f11">
              pengantar teknologi informasi 2 SKS
            </HoveredLink>
            <HoveredLink href="/teknik-informatika/67fbb83b2fa09622d78d5f16">
              algoritma dan pemrogrman 2 SKS
            </HoveredLink>
          </div>
        </MenuItem>

        <MenuItem
          setActive={setActive}
          active={active}
          item="PENDIDIKAN SOSIAL DAN AGAMA"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/agama">pendidikan agama 2 SKS</HoveredLink>
            <HoveredLink href="/pancasila">pendidikan pancasila 2 SKS</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="MATEMATIKA DAN BAHASA"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/english">basic academy english 2 SKS</HoveredLink>
            <HoveredLink href="/kalkulus">kalkulus 1 3 SKS</HoveredLink>
            <HoveredLink href="/fisika">fisika dasar 3 SKS</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
