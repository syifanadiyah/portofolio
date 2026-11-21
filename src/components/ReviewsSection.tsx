import { Star } from 'lucide-react';
import { REVIEWS_LIST } from '../data/portfolioData';

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-20 bg-[#F3EEE3] border-t border-[#4A151B]/10 px-6"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Banner with Blue Stripes */}
        <div className="stripe-banner p-8 md:p-12 rounded-2xl border border-[#4A151B]/15 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#6E262E] font-bold block">
            KIND WORDS FROM COLLABORATORS
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4A151B] text-balance">
            Good work, lovely people.
          </h2>
          <p className="text-sm md:text-base text-[#6B5E5E] max-w-lg mx-auto">
            The best part of creating is building meaningful relationships along
            the way.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_LIST.map((review) => (
            <article
              key={review.author}
              className="bg-[#FBF8F1] p-8 rounded-2xl border border-[#4A151B]/15 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div
                  className="flex items-center gap-1 text-[#D4AF37]"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-[#6B5E5E] text-sm md:text-base italic leading-relaxed">
                  {review.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-[#4A151B]/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4E5F0] text-[#4A151B] flex items-center justify-center font-bold font-serif text-sm shrink-0">
                  {review.initials}
                </div>
                <div>
                  <p className="font-bold text-sm text-[#4A151B]">
                    {review.author}
                  </p>
                  <p className="text-xs text-[#6B5E5E]">{review.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
