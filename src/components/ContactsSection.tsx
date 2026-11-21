import { useState } from 'react';
import { Check, Copy, Instagram, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export function ContactsSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contacts"
      className="py-20 bg-[#F3EEE3] border-t border-[#4A151B]/15 px-6"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#6E262E] font-bold block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#4A151B] text-balance">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="text-base md:text-lg text-[#6B5E5E] max-w-xl mx-auto">
            Have an exciting project, speaking engagement, or collaboration in
            mind? Feel free to reach out anytime!
          </p>
        </div>

        {/* Pill Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
          <div className="inline-flex items-center rounded-full bg-[#4A151B] text-[#FBF8F1] shadow hover:shadow-md transition-all">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center gap-2.5 pl-7 pr-4 py-4 text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              title="Copy email address"
              className="pr-5 pl-3 py-4 border-l border-[#FBF8F1]/20 hover:bg-[#6E262E] rounded-r-full transition-colors cursor-pointer"
            >
              {copied ? (
                <Check className="w-4 h-4 text-[#D4AF37]" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          <a
            href={CONTACT_INFO.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#E1306C] text-[#FBF8F1] rounded-full text-sm sm:text-base font-semibold shadow hover:opacity-95 hover:-translate-y-0.5 transition-all"
          >
            <Instagram className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Instagram ({CONTACT_INFO.instagramHandle})</span>
          </a>
        </div>

        {copied && (
          <p className="text-xs font-medium text-[#6E262E]" role="status">
            Email address copied to clipboard.
          </p>
        )}

        {/* Location Indicator */}
        <div className="pt-4 flex items-center justify-center gap-2 text-sm text-[#6B5E5E]">
          <MapPin className="w-4 h-4 text-[#6E262E] shrink-0" aria-hidden="true" />
          <span>{CONTACT_INFO.location}</span>
        </div>
      </div>
    </section>
  );
}
