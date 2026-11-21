import { useState } from 'react';
import { Award, Medal } from 'lucide-react';
import {
  ABOUT_PHOTO_URL,
  ACHIEVEMENTS_LIST,
  CORE_SKILLS,
  EDUCATION_LIST,
  EXPERIENCE_LIST,
  TOOLS_LIST,
} from '../data/portfolioData';
import { PortraitImage } from './PortraitImage';

export function AboutSection() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const activeToolObj = TOOLS_LIST.find((t) => t.name === selectedTool);

  return (
    <section
      id="about"
      className="py-20 bg-[#F3EEE3] border-y border-[#4A151B]/10 px-6"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Top Row: Ornate Golden Frame & Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Ornate Framed Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-2 bg-gradient-to-tr from-amber-700 via-yellow-500 to-amber-600 rounded-2xl shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="p-3 bg-[#FBF8F1] rounded-xl border border-amber-900/20">
                <PortraitImage
                  src={ABOUT_PHOTO_URL}
                  slotTag="Foto 2"
                  slotSuggestion="Disarankan foto candid kreatif / formal santai kamu untuk bingkai emas (rasio 4:5)"
                  alt="Syifa Danar Nadiyah in Classic Frame"
                  className="w-56 sm:w-64 h-72 object-cover object-top rounded-lg shadow-inner"
                />
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#6E262E] font-bold block">
              A LITTLE ABOUT ME
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[#4A151B] leading-tight text-balance">
              Creative by Nature,
              <br className="hidden sm:inline" /> curious by Heart.
            </h2>
            <div className="space-y-4 text-base md:text-lg text-[#6B5E5E] leading-relaxed">
              <p>
                Saya adalah mahasiswa{' '}
                <strong className="text-[#4A151B] font-semibold">
                  Teknik Informatika (IT PLN)
                </strong>{' '}
                berlatar belakang jurusan IPA yang memadukan logika sistem,
                problem solving, dan kecintaan terhadap dunia literasi serta
                kreasi visual.
              </p>
              <p>
                Melalui eksplorasi konten edukatif dan estetis, saya percaya
                setiap pesan dapat disampaikan secara bermakna melalui visual
                yang berkarakter, relevan dengan audiens, serta berlandaskan
                integritas berpikir analitis.
              </p>
              <p className="font-serif italic text-[#4A151B] font-semibold text-lg">
                Let&apos;s bring your vision to life.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row: 3-Column Experience & Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-[#4A151B]/15">
          {/* Column 1: Experience */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#4A151B] border-b border-[#4A151B]/20 pb-2 flex items-center gap-2 font-sans">
              <span aria-hidden="true">●</span> EXPERIENCE
            </h3>
            <ul className="space-y-4 text-sm">
              {EXPERIENCE_LIST.map((item) => (
                <li key={`${item.period}-${item.role}`} className="space-y-1">
                  <span className="text-xs font-semibold text-[#6B5E5E] tabular-nums">
                    {item.period}
                  </span>
                  <p className="font-bold text-[#4A151B] text-base">
                    {item.role}
                  </p>
                  <p className="text-[#6B5E5E]">{item.organization}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Education & Core Skills */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#4A151B] border-b border-[#4A151B]/20 pb-2 flex items-center gap-2 font-sans">
                <span aria-hidden="true">●</span> EDUCATION
              </h3>
              <ul className="space-y-3 text-sm">
                {EDUCATION_LIST.map((edu) => (
                  <li key={edu.degree} className="space-y-0.5">
                    <span className="text-xs font-semibold text-[#6B5E5E] tabular-nums">
                      {edu.period}
                    </span>
                    <p className="font-bold text-[#4A151B]">{edu.degree}</p>
                    <p className="text-[#6B5E5E]">{edu.institution}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#4A151B] border-b border-[#4A151B]/20 pb-2 flex items-center gap-2 font-sans">
                <span aria-hidden="true">●</span> CORE SKILLS
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                {CORE_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-[#FBF8F1] border border-[#4A151B]/15 text-[#4A151B]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Tools & Achievements */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#4A151B] border-b border-[#4A151B]/20 pb-2 flex items-center gap-2 font-sans">
                <span aria-hidden="true">●</span> TOOLS
              </h3>
              <div className="grid grid-cols-5 gap-2 text-center text-xs">
                {TOOLS_LIST.map((tool) => {
                  const isSelected = selectedTool === tool.name;
                  return (
                    <button
                      key={tool.name}
                      type="button"
                      onClick={() =>
                        setSelectedTool(isSelected ? null : tool.name)
                      }
                      aria-pressed={isSelected}
                      className={`p-2 rounded border transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? 'bg-[#4A151B] text-[#FBF8F1] border-[#4A151B] -translate-y-0.5 shadow-sm'
                          : 'bg-[#FBF8F1] border-[#4A151B]/15 hover:border-[#4A151B] hover:-translate-y-0.5'
                      }`}
                    >
                      <div
                        className={`font-bold ${
                          isSelected ? 'text-[#D4AF37]' : tool.accentClass
                        }`}
                      >
                        {tool.code}
                      </div>
                      <span
                        className={`text-[10px] ${
                          isSelected ? 'text-[#FBF8F1]/90' : 'text-[#6B5E5E]'
                        }`}
                      >
                        {tool.name}
                      </span>
                    </button>
                  );
                })}
              </div>
              {activeToolObj && (
                <p className="text-xs text-[#4A151B] bg-[#FBF8F1] border border-[#4A151B]/15 rounded-lg px-3 py-2">
                  <strong className="font-semibold">{activeToolObj.name}:</strong>{' '}
                  {activeToolObj.note}
                </p>
              )}
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#4A151B] border-b border-[#4A151B]/20 pb-2 flex items-center gap-2 font-sans">
                <span aria-hidden="true">●</span> PRESTASI
              </h3>
              <ul className="space-y-3 text-xs leading-snug">
                {ACHIEVEMENTS_LIST.map((ach) => (
                  <li
                    key={ach.title}
                    className="p-2.5 rounded bg-[#FBF8F1] border border-[#4A151B]/15 space-y-1"
                  >
                    <div className="font-bold text-[#4A151B] flex items-center gap-1.5">
                      {ach.category === 'literacy' ? (
                        <Award
                          className="w-3.5 h-3.5 text-[#D4AF37] shrink-0"
                          aria-hidden="true"
                        />
                      ) : (
                        <Medal
                          className="w-3.5 h-3.5 text-[#D4AF37] shrink-0"
                          aria-hidden="true"
                        />
                      )}
                      <span>
                        {ach.title} ({ach.year})
                      </span>
                    </div>
                    <p className="text-[#6B5E5E]">{ach.issuer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
