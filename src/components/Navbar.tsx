"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/cometidos", label: "Cometidos" },
  { href: "/equipo", label: "Equipo" },
  { href: "/novedades", label: "Novedades" },
  { href: "/formacion", label: "Formación" },
  { href: "/retiros", label: "Retiros" },
  { href: "/universidad", label: "Universidad" },
  { href: "/colaboracion", label: "Colaboración" },
  { href: "/radio", label: "Radio" },
  { href: "/iglesia", label: "IFE" },
  { href: "/canciones", label: "Canciones" },
  { href: "/adhesion", label: "Adhesión" },
  { href: "/contacto", label: "Contactos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-primary-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-base shrink-0">
          <span className="text-gold-400 text-xl">✦</span>
          <span className="hidden sm:inline">Salud Naturista DECOYÍN</span>
          <span className="sm:hidden">SND</span>
        </Link>
        <button className="lg:hidden text-2xl ml-4" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? "✕" : "☰"}
        </button>
        <div className="hidden lg:flex gap-0.5">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="px-2.5 py-2 rounded text-[13px] hover:bg-primary-700 transition-colors whitespace-nowrap">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-primary-800 pb-4 max-h-[80vh] overflow-y-auto">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 hover:bg-primary-700 transition-colors border-b border-primary-700/30">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
