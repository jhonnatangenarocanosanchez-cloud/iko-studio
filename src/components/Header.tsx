"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const NAV_ITEMS = [
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/metodologia", label: "Metodología" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-blanco/95 backdrop-blur-sm border-b border-gray-300/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg" aria-label="Inicio">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-500 hover:text-negro transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="text-sm font-medium text-white bg-coral hover:bg-coral-hover px-5 py-2.5 rounded-lg transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-negro"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Menú de navegación"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="md:hidden pb-4 border-t border-gray-300/50 pt-4" aria-label="Móvil">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-sm font-medium text-gray-500 hover:text-negro"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="block mt-2 text-center text-sm font-medium text-white bg-coral hover:bg-coral-hover px-5 py-2.5 rounded-lg transition-colors"
              onClick={() => setOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
