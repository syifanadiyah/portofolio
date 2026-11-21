import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectPackage: (packageTitle: string) => void;
}

export function ServicesSection({ onSelectPackage }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Banner with Blue Stripes */}
        <div className="stripe-banner p-8 md:p-12 rounded-2xl border border-[#4A151B]/15 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#6E262E] font-bold block">
            LET&apos;S MAKE SOMETHING CREATIVE
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4A151B] text-balance">
            Flexible packages for sweet ideas.
          </h2>
          <p className="text-sm md:text-base text-[#6B5E5E] max-w-lg mx-auto">
            Every project is an opportunity to tell a story. Choose a package
            that fits your content goals, campaign needs, and creative
            direction.
          </p>
        </div>

        {/* 2 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className="bg-[#F3EEE3] p-8 md:p-10 rounded-3xl border border-[#4A151B]/15 shadow-md flex flex-col justify-between space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#4A151B]/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6E262E]">
                    {pkg.number}
                  </span>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      pkg.badgeStyle === 'burgundy'
                        ? 'bg-[#4A151B] text-white'
                        : 'bg-[#D4E5F0] text-[#4A151B] border border-[#4A151B]/20'
                    }`}
                  >
                    {pkg.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#4A151B]">
                    {pkg.title}
                  </h3>
                  <p className="text-[#6B5E5E] text-sm mt-2 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-3 text-sm text-[#4A151B] font-medium">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <Check
                        className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 stroke-[2.75]"
                        aria-hidden="true"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => onSelectPackage(pkg.title)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#4A151B] text-[#FBF8F1] rounded-xl text-sm font-semibold tracking-wide hover:bg-[#6E262E] transition-colors shadow cursor-pointer"
                >
                  <span>{pkg.ctaLabel}</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
