import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBF8F1]/90 backdrop-blur-md border-b border-[#4A151B]/10 transition-colors duration-200">
      <nav
        aria-label="Primary navigation"
        className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-8"
      >
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#hero"
          className="text-xl md:text-2xl font-serif font-bold tracking-tight text-[#4A151B] hover:opacity-80 transition-opacity whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4A151B]"
        >
          Syifa Danar Nadiyah<span className="text-[#D4AF37]">.</span>
        </a>

        {/* Zone 2: Desktop Single-Line Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm lg:text-base font-medium">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4A151B] ${
                    isActive
                      ? 'text-[#4A151B] font-semibold'
                      : 'text-[#4A151B]/80 hover:text-[#6E262E]'
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-[#4A151B] transition-transform duration-200 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#4A151B]/20 text-[#4A151B] hover:bg-[#F3EEE3] transition-colors cursor-pointer"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Dropdown Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FBF8F1] border-b border-[#4A151B]/15 px-6 pb-5 pt-2">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-base font-medium text-[#4A151B] hover:bg-[#F3EEE3] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
