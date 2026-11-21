import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactsSection } from './components/ContactsSection';
import { ContentStyleSection } from './components/ContentStyleSection';
import { EnquiryModal } from './components/EnquiryModal';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ReviewsSection } from './components/ReviewsSection';
import { ServicesSection } from './components/ServicesSection';
import { NAV_LINKS, SERVICE_PACKAGES } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState<string>(SERVICE_PACKAGES[0].title);

  useEffect(() => {
    const sectionIds = ['hero', ...NAV_LINKS.map((l) => l.id)];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.35],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleOpenEnquiry = (topic?: string) => {
    if (topic) {
      setModalTopic(topic);
    }
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF8F1] text-[#4A151B]">
      <Navbar activeSection={activeSection} />

      <main>
        <HeroSection onOpenEnquiry={() => handleOpenEnquiry()} />
        <AboutSection />
        <ContentStyleSection
          onEnquireFocus={(focusTitle) => handleOpenEnquiry(focusTitle)}
        />
        <ReviewsSection />
        <ServicesSection
          onSelectPackage={(packageTitle) => handleOpenEnquiry(packageTitle)}
        />
        <ContactsSection />
      </main>

      <footer className="bg-[#FBF8F1] py-8 border-t border-[#4A151B]/10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B5E5E]">
          <p>&copy; 2025 Syifa Danar Nadiyah Siregar. All rights reserved.</p>
          <p className="font-serif italic text-[#4A151B]">
            Crafted with passion for Technology, Code &amp; Creative Literacy.
          </p>
        </div>
      </footer>

      <EnquiryModal
        isOpen={modalOpen}
        initialTopic={modalTopic}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
