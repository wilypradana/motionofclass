"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, X } from "lucide-react";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={cn("fixed top-5 inset-x-0 z-50", className)}>
      <div className="max-w-2xl mx-auto flex justify-between items-center px-4 md:px-0">
        <div className="text-lg font-bold lg:hidden">Mentarimenari</div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="TI">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/courses/67fbb83b2fa09622d78d5f0c">
                  logika informatika 3 SKS
                </HoveredLink>
                <HoveredLink href="/courses/67fbb83b2fa09622d78d5f11">
                  pengantar teknologi informasi 2 SKS
                </HoveredLink>
                <HoveredLink href="/courses/67fbb83b2fa09622d78d5f16">
                  algoritma dan pemrogramman 2 SKS
                </HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="PENDIDIKAN SOSIAL DAN AGAMA">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/agama">pendidikan agama 2 SKS</HoveredLink>
                <HoveredLink href="/pancasila">pendidikan pancasila 2 SKS</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="MATEMATIKA DAN BAHASA">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/english">basic academy english 2 SKS</HoveredLink>
                <HoveredLink href="/courses/67fd496ebe49113f15fa71bc">kalkulus 1 3 SKS</HoveredLink>
                <HoveredLink href="/courses/67fd496ebe49113f15fa71b6">fisika dasar 3 SKS</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden focus:outline-none">
          {mobileOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-dark text-white shadow-lg rounded-lg p-4 mt-2 mx-4 space-y-4">
          <div>
            <p className="font-semibold">TI</p>
            <div className="flex flex-col space-y-2 text-sm pl-2">
              <HoveredLink href="/teknik-informatika/67fbb83b2fa09622d78d5f0c">logika informatika 3 SKS</HoveredLink>
              <HoveredLink href="/teknik-informatika/67fbb83b2fa09622d78d5f11">pengantar teknologi informasi 2 SKS</HoveredLink>
              <HoveredLink href="/teknik-informatika/67fbb83b2fa09622d78d5f16">algoritma dan pemrogramman 2 SKS</HoveredLink>
            </div>
          </div>

          <div>
            <p className="font-semibold">PENDIDIKAN SOSIAL DAN AGAMA</p>
            <div className="flex flex-col space-y-2 text-sm pl-2">
              <HoveredLink href="/agama">pendidikan agama 2 SKS</HoveredLink>
              <HoveredLink href="/pancasila">pendidikan pancasila 2 SKS</HoveredLink>
            </div>
          </div>

          <div>
            <p className="font-semibold">MATEMATIKA DAN BAHASA</p>
            <div className="flex flex-col space-y-2 text-sm pl-2">
              <HoveredLink href="/english">basic academy english 2 SKS</HoveredLink>
              <HoveredLink href="/courses/67fd496ebe49113f15fa71bc">kalkulus 1 3 SKS</HoveredLink>
              <HoveredLink href="/courses/67fd496ebe49113f15fa71b6">fisika dasar 3 SKS</HoveredLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
