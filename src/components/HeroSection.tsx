import { ArrowUpRight, Award, Sparkles } from 'lucide-react';
import { HERO_PHOTO_URL } from '../data/portfolioData';
import { PortraitImage } from './PortraitImage';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
}

export function HeroSection({ onOpenEnquiry }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative pt-12 pb-20 md:py-24 px-6 max-w-6xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Hero Text Column */}
        <div className="lg:col-span-7 space-y-6">
          <p className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEE3] border border-[#4A151B]/15 text-xs font-semibold uppercase tracking-wider text-[#6E262E]">
            Informatics Engineering &amp; Content Creator
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[66px] font-serif font-bold tracking-tight text-[#4A151B] leading-[1.08] text-balance">
            Real stories.
            <br />
            Creative visuals.
            <br />
            Content that connects.
          </h1>

          <p className="text-lg md:text-xl text-[#6B5E5E] max-w-xl leading-relaxed">
            Hi, I&apos;m{' '}
            <strong className="text-[#4A151B] font-semibold">
              Syifa Danar Nadiyah
            </strong>{' '}
            — Informatics Engineering Student at IT PLN &amp; Content Creator
            passionate about technology, literacy, and impactful visual
            storytelling.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#content-style"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4A151B] text-[#FBF8F1] rounded-full text-base font-semibold shadow-md hover:bg-[#6E262E] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <span>Explore My Work</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={onOpenEnquiry}
              className="inline-flex items-center justify-center px-7 py-4 border border-[#4A151B]/30 text-[#4A151B] rounded-full text-base font-semibold hover:bg-[#F3EEE3] transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Hero Visual Column */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          {/* Warm Oval Decorative Backdrop */}
          <div
            aria-hidden="true"
            className="absolute w-72 h-88 sm:w-80 sm:h-96 md:w-96 md:h-[430px] rounded-[180px] bg-[#F3EEE3] border border-[#4A151B]/10 shadow-inner -z-10 -rotate-1"
          />

          {/* Hero Portrait Container */}
          <div className="relative w-64 sm:w-72 md:w-80">
            <PortraitImage
              src={HERO_PHOTO_URL}
              slotTag="Foto 1"
              slotSuggestion="Disarankan foto portrait utama kamu (half-body/close-up rapi, rasio 3:4)"
              alt="Portrait of Syifa Danar Nadiyah"
              className="w-full aspect-[3/4] object-cover object-top rounded-3xl drop-shadow-xl bg-[#EFE7D8]"
            />

            {/* Floating Achievement Callout Top Left */}
            <a
              href="#about"
              className="absolute -top-4 -left-4 sm:-left-6 bg-[#F3EEE3]/95 backdrop-blur-sm border border-[#4A151B]/20 text-[#4A151B] px-4 py-2 rounded-full text-xs font-semibold shadow-md flex items-center gap-2 hover:-translate-y-0.5 transition-transform whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
              <span>Top 200 USU Olympiad</span>
            </a>

            {/* Floating Achievement Callout Bottom Right */}
            <a
              href="#about"
              className="absolute -bottom-4 -right-3 sm:-right-4 bg-[#F3EEE3]/95 backdrop-blur-sm border border-[#4A151B]/20 text-[#4A151B] px-4 py-2 rounded-full text-xs font-semibold shadow-md flex items-center gap-2 hover:-translate-y-0.5 transition-transform whitespace-nowrap"
            >
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
              <span>Juara 5 Konten Literasi</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
