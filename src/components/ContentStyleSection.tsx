import { useState } from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import {
  CONTENT_STYLE_PHOTO_URL,
  FOCUS_AREAS,
  HIGHLIGHTS_METRICS,
  type FocusArea,
} from '../data/portfolioData';
import { PortraitImage } from './PortraitImage';

interface ContentStyleSectionProps {
  onEnquireFocus: (focusTitle: string) => void;
}

export function ContentStyleSection({ onEnquireFocus }: ContentStyleSectionProps) {
  const [selectedFocusId, setSelectedFocusId] = useState<string | null>(null);
  const activeFocus: FocusArea | undefined = FOCUS_AREAS.find(
    (f) => f.id === selectedFocusId
  );

  const leftFocuses = FOCUS_AREAS.slice(0, 2);
  const rightFocuses = FOCUS_AREAS.slice(2, 4);

  const renderFocusButton = (focus: FocusArea) => {
    const isActive = selectedFocusId === focus.id;
    return (
      <button
        key={focus.id}
        type="button"
        onClick={() => setSelectedFocusId(isActive ? null : focus.id)}
        aria-pressed={isActive}
        className={`px-6 py-4 rounded-2xl shadow-lg border text-center w-52 md:w-56 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4A151B] ${
          isActive
            ? 'bg-[#6E262E] text-[#FBF8F1] border-[#D4AF37] scale-105 ring-2 ring-[#D4AF37]/40'
            : 'bg-[#4A151B] text-[#FBF8F1] border-[#6E262E]/40 hover:scale-105 hover:bg-[#6E262E]'
        }`}
      >
        <span className="text-xs uppercase tracking-wider opacity-75 block mb-0.5">
          {focus.index}
        </span>
        <span className="font-serif font-semibold text-base sm:text-lg block">
          {focus.title}
        </span>
      </button>
    );
  };

  return (
    <section id="content-style" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Retro Striped Top Header */}
        <div className="stripe-banner rounded-2xl border border-[#4A151B]/15 p-8 md:p-12 text-center relative overflow-hidden">
          <div className="inline-block bg-[#FBF8F1]/95 px-8 py-3 rounded-full border border-[#4A151B]/20 shadow-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif tracking-wide text-[#4A151B] uppercase">
              MY CONTENT STYLE
            </h2>
          </div>
        </div>

        {/* Central Showcase with 4 Burgundy Focus Pills */}
        <div className="space-y-8">
          <div className="relative py-12 flex justify-center items-center">
            {/* Background Vertical Decorative Bars */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex justify-around opacity-30 pointer-events-none -z-10 px-8"
            >
              <div className="w-8 h-full bg-[#D4E5F0] rounded-full" />
              <div className="w-8 h-full bg-[#D4E5F0] rounded-full" />
              <div className="w-8 h-full bg-[#D4E5F0] rounded-full" />
              <div className="w-8 h-full bg-[#D4E5F0] rounded-full" />
            </div>

            {/* Surrounding Focus Layout */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Left Focus Pills */}
              <div className="flex flex-col gap-6 items-center md:items-end order-2 md:order-1">
                {leftFocuses.map(renderFocusButton)}
              </div>

              {/* Central Portrait Cutout */}
              <div className="flex justify-center order-1 md:order-2">
                <div className="relative w-60 sm:w-64">
                  <div className="w-full h-80 rounded-full bg-[#F3EEE3] border-2 border-[#4A151B]/15 shadow-2xl p-2 flex items-center justify-center">
                    <PortraitImage
                      src={CONTENT_STYLE_PHOTO_URL}
                      slotTag="Foto 3"
                      slotSuggestion="Disarankan foto ekspresif / pose saat ngonten atau pegang mic/kamera (rasio oval 3:4)"
                      badgePosition="bottom-center"
                      alt="Syifa Danar Nadiyah - Content Style"
                      className="w-full h-full object-cover object-top rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Right Focus Pills */}
              <div className="flex flex-col gap-6 items-center md:items-start order-3">
                {rightFocuses.map(renderFocusButton)}
              </div>
            </div>
          </div>

          {/* Expandable Editorial Spotlight when a Focus Pill is clicked */}
          {activeFocus && (
            <div className="max-w-4xl mx-auto bg-[#F3EEE3] border border-[#4A151B]/15 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-start justify-between gap-4 border-b border-[#4A151B]/10 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#6E262E]">
                    {activeFocus.index}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#4A151B] mt-0.5">
                    {activeFocus.title}
                  </h3>
                  <p className="text-sm text-[#6B5E5E] mt-1">
                    {activeFocus.tagline}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedFocusId(null)}
                  aria-label="Close focus details"
                  className="w-9 h-9 rounded-full border border-[#4A151B]/20 flex items-center justify-center text-[#4A151B] hover:bg-[#FBF8F1] transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-5 items-start">
                <div className="md:col-span-7 space-y-3">
                  <p className="text-sm md:text-base text-[#4A151B]/90 leading-relaxed">
                    {activeFocus.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-[#6B5E5E]">
                    <span className="font-semibold text-[#4A151B]">Workflow Tools:</span>
                    {activeFocus.tools.map((tool, idx) => (
                      <span key={tool} className="inline-flex items-center gap-2">
                        {idx > 0 && <span aria-hidden="true">·</span>}
                        <span>{tool}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-5 space-y-3 bg-[#FBF8F1] p-4 rounded-xl border border-[#4A151B]/10">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#6E262E]">
                    Signature Deliverables
                  </p>
                  <ul className="space-y-2 text-xs md:text-sm text-[#4A151B]">
                    {activeFocus.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check
                          className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => onEnquireFocus(activeFocus.title)}
                    className="mt-2 w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#4A151B] text-[#FBF8F1] rounded-lg text-xs font-semibold hover:bg-[#6E262E] transition-colors cursor-pointer"
                  >
                    <span>Collaborate on {activeFocus.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Creator Highlights Stripe & Metric Counters */}
        <div className="stripe-banner rounded-2xl border border-[#4A151B]/15 p-6 md:p-10 text-center space-y-6">
          <div className="inline-block bg-[#FBF8F1] px-6 py-2 rounded-full border border-[#4A151B]/20">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#4A151B] tracking-wider uppercase">
              CREATOR HIGHLIGHTS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 max-w-4xl mx-auto">
            {HIGHLIGHTS_METRICS.map((metric) => (
              <div
                key={metric.value}
                className="bg-[#FBF8F1]/95 p-6 rounded-2xl border border-[#4A151B]/15 shadow-sm text-center"
              >
                <span className="text-4xl md:text-5xl font-serif font-bold text-[#4A151B] block mb-2 tabular-nums">
                  {metric.value}
                </span>
                <p className="text-sm text-[#6B5E5E]">{metric.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
