import { useRef, useState, type ChangeEvent } from 'react';
import { Camera, RotateCcw } from 'lucide-react';

interface PortraitImageProps {
  src: string;
  alt: string;
  slotTag: string;
  slotSuggestion: string;
  className?: string;
  badgePosition?: 'top-right' | 'bottom-center';
}

export function PortraitImage({
  src,
  alt,
  slotTag,
  slotSuggestion,
  className = '',
  badgePosition = 'top-right',
}: PortraitImageProps) {
  const [hasError, setHasError] = useState(false);
  const [customUrl, setCustomUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activeSrc = customUrl || src;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setCustomUrl(reader.result);
        setHasError(false);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="relative group w-full h-full">
      {hasError ? (
        <div
          className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F3EEE3] via-[#EFE7D8] to-[#D4E5F0]/60 text-[#4A151B] select-none border-2 border-dashed border-[#D4AF37] ${className}`}
          role="img"
          aria-label={alt}
        >
          <span className="font-serif text-3xl font-bold tracking-tight">SDN</span>
          <span className="mt-1 text-xs font-medium text-[#6B5E5E]">
            {slotTag}
          </span>
        </div>
      ) : (
        <img
          src={activeSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={`${className} ring-2 ring-dashed ring-[#D4AF37]/80 ring-offset-2 ring-offset-[#FBF8F1]`}
        />
      )}

      {/* Clear Marker Badge showing this slot should be replaced with user's photo */}
      <div
        className={`absolute z-20 flex items-center gap-1.5 ${
          badgePosition === 'bottom-center'
            ? 'bottom-3 left-1/2 -translate-x-1/2'
            : 'top-3 right-3'
        }`}
      >
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          title={slotSuggestion}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#4A151B]/90 text-[#FBF8F1] border border-[#D4AF37] text-[11px] font-semibold shadow-md hover:bg-[#6E262E] transition-colors cursor-pointer whitespace-nowrap"
        >
          <Camera className="w-3 h-3 text-[#D4AF37] shrink-0" aria-hidden="true" />
          <span>{customUrl ? `${slotTag} ✓` : `Ganti ${slotTag}`}</span>
        </button>

        {customUrl && (
          <button
            type="button"
            onClick={() => setCustomUrl(null)}
            aria-label={`Reset ${slotTag}`}
            title="Kembalikan foto awal"
            className="w-6 h-6 rounded-full bg-[#FBF8F1] border border-[#4A151B]/25 text-[#4A151B] flex items-center justify-center shadow hover:bg-[#F3EEE3] cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        aria-label={`Upload foto untuk ${slotTag}`}
      />
    </div>
  );
}
