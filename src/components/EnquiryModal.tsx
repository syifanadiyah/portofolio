import { useEffect, useState } from 'react';
import { Check, Copy, Instagram, Mail, X } from 'lucide-react';
import { CONTACT_INFO, SERVICE_PACKAGES } from '../data/portfolioData';

interface EnquiryModalProps {
  isOpen: boolean;
  initialTopic: string;
  onClose: () => void;
}

export function EnquiryModal({
  isOpen,
  initialTopic,
  onClose,
}: EnquiryModalProps) {
  const [selectedTopic, setSelectedTopic] = useState(
    initialTopic || SERVICE_PACKAGES[0].title
  );
  const [senderName, setSenderName] = useState('');
  const [organization, setOrganization] = useState('');
  const [timeline, setTimeline] = useState('');
  const [brief, setBrief] = useState('');
  const [copiedBrief, setCopiedBrief] = useState(false);

  useEffect(() => {
    if (initialTopic) {
      setSelectedTopic(initialTopic);
    }
  }, [initialTopic]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const buildMessageText = () => {
    const lines = [
      `Halo Syifa, saya tertarik untuk berkolaborasi pada: ${selectedTopic}`,
      senderName ? `Nama: ${senderName}` : null,
      organization ? `Instansi/Brand: ${organization}` : null,
      timeline ? `Target Waktu: ${timeline}` : null,
      brief ? `Brief / Catatan:\n${brief}` : null,
    ].filter(Boolean);
    return lines.join('\n\n');
  };

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(buildMessageText());
      setCopiedBrief(true);
      window.setTimeout(() => setCopiedBrief(false), 2500);
    } catch {
      setCopiedBrief(false);
    }
  };

  const emailHref = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
    `Collaboration Enquiry — ${selectedTopic}`
  )}&body=${encodeURIComponent(buildMessageText())}`;

  const topicOptions = [
    ...SERVICE_PACKAGES.map((p) => p.title),
    'Technology & Code',
    'Literacy & Content',
    'Public Speaking & MC',
    'Creative Storytelling',
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2E0208]/45 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#FBF8F1] rounded-3xl border border-[#4A151B]/20 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="stripe-banner px-6 py-5 border-b border-[#4A151B]/15 flex items-start justify-between gap-4">
          <div className="bg-[#FBF8F1]/95 px-4 py-2 rounded-2xl border border-[#4A151B]/15">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#6E262E] block">
              COLLABORATION BRIEF
            </span>
            <h3
              id="enquiry-modal-title"
              className="text-xl sm:text-2xl font-serif font-bold text-[#4A151B]"
            >
              Let&apos;s work together
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 rounded-full bg-[#FBF8F1] border border-[#4A151B]/20 flex items-center justify-center text-[#4A151B] hover:bg-[#F3EEE3] transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label
              htmlFor="enquiry-topic"
              className="block text-xs font-bold uppercase tracking-wider text-[#6E262E] mb-1.5"
            >
              Package or Focus Area
            </label>
            <select
              id="enquiry-topic"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full rounded-xl border border-[#4A151B]/20 bg-[#F3EEE3] px-4 py-2.5 text-sm font-medium text-[#4A151B] focus:outline-none focus:ring-2 focus:ring-[#4A151B]"
            >
              {topicOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="enquiry-name"
                className="block text-xs font-bold uppercase tracking-wider text-[#6E262E] mb-1.5"
              >
                Your Name
              </label>
              <input
                id="enquiry-name"
                type="text"
                placeholder="e.g. Nadia Putri"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full rounded-xl border border-[#4A151B]/20 bg-white px-3.5 py-2.5 text-sm text-[#4A151B] placeholder:text-[#6B5E5E]/60 focus:outline-none focus:ring-2 focus:ring-[#4A151B]"
              />
            </div>

            <div>
              <label
                htmlFor="enquiry-org"
                className="block text-xs font-bold uppercase tracking-wider text-[#6E262E] mb-1.5"
              >
                Organization / Brand
              </label>
              <input
                id="enquiry-org"
                type="text"
                placeholder="e.g. BEM IT PLN"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="w-full rounded-xl border border-[#4A151B]/20 bg-white px-3.5 py-2.5 text-sm text-[#4A151B] placeholder:text-[#6B5E5E]/60 focus:outline-none focus:ring-2 focus:ring-[#4A151B]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="enquiry-timeline"
              className="block text-xs font-bold uppercase tracking-wider text-[#6E262E] mb-1.5"
            >
              Target Timeline
            </label>
            <input
              id="enquiry-timeline"
              type="text"
              placeholder="e.g. Next month / December 2026"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="w-full rounded-xl border border-[#4A151B]/20 bg-white px-3.5 py-2.5 text-sm text-[#4A151B] placeholder:text-[#6B5E5E]/60 focus:outline-none focus:ring-2 focus:ring-[#4A151B]"
            />
          </div>

          <div>
            <label
              htmlFor="enquiry-brief"
              className="block text-xs font-bold uppercase tracking-wider text-[#6E262E] mb-1.5"
            >
              Project Brief &amp; Goals
            </label>
            <textarea
              id="enquiry-brief"
              rows={3}
              placeholder="Share a quick overview of your event, campaign, or content goals..."
              value={brief}
              onChange={(e) => setBrief(e.target.value)}
              className="w-full rounded-xl border border-[#4A151B]/20 bg-white px-3.5 py-2.5 text-sm text-[#4A151B] placeholder:text-[#6B5E5E]/60 focus:outline-none focus:ring-2 focus:ring-[#4A151B]"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={CONTACT_INFO.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCopyBrief}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#E1306C] text-[#FBF8F1] rounded-xl text-sm font-semibold hover:opacity-95 transition-opacity"
            >
              <Instagram className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>DM IG ({CONTACT_INFO.instagramHandle})</span>
            </a>

            <a
              href={emailHref}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#4A151B] text-[#FBF8F1] rounded-xl text-sm font-semibold hover:bg-[#6E262E] transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Open Email Draft</span>
            </a>

            <button
              type="button"
              onClick={handleCopyBrief}
              title="Copy brief text"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 border border-[#4A151B]/25 text-[#4A151B] rounded-xl text-sm font-semibold hover:bg-[#F3EEE3] transition-colors cursor-pointer"
            >
              {copiedBrief ? (
                <>
                  <Check className="w-4 h-4 text-emerald-700" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          {copiedBrief && (
            <p className="text-xs text-[#6E262E] text-center" role="status">
              Brief disalin ke clipboard — tinggal paste ke DM Instagram{' '}
              {CONTACT_INFO.instagramHandle}.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
