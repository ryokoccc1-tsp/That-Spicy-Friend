import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const isJa = lang === 'ja';

  const navLinks = [
    { label: isJa ? '実績' : 'Proof', href: '#proof' },
    { label: isJa ? '特徴' : 'Features', href: '#features' },
    { label: isJa ? '提供内容' : 'Showcase', href: '#showcase' },
    { label: isJa ? '変化' : 'Benefits', href: '#benefits' },
    { label: isJa ? '体験談' : 'Stories', href: '#stories' },
    { label: isJa ? '料金' : 'Pricing', href: '#pricing' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-cream/80 backdrop-blur-[28px] border-b border-maroon/10 shadow-[0_1px_20px_rgba(74,15,31,0.05)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-maroon to-violet flex items-center justify-center shadow-lg shadow-maroon/20 group-hover:shadow-maroon/40 transition-shadow">
            <Sparkles className="h-4 w-4 text-gold-bright" />
          </div>
          <span className="font-editorial text-xl font-semibold text-ink tracking-tight leading-none">
            Spicy <span className="italic font-display text-maroon">Friend</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-ink-muted hover:text-maroon transition-colors duration-300 hover-underline tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-[12px] font-semibold text-ink-muted hover:text-maroon transition-colors"
          >
            <Globe className="h-4 w-4" />
            {isJa ? 'EN' : 'JP'}
          </button>
          
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-maroon to-violet text-cream px-5 py-2.5 text-[13px] font-semibold hover:from-maroon-deep hover:to-violet-deep transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-maroon/20 hover:shadow-maroon/30"
              >
                {isJa ? '辛口アドバイスを始める' : 'Take the First Step'}
              </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-[12px] font-semibold text-ink-muted hover:text-maroon transition-colors"
          >
            <Globe className="h-4 w-4" />
            {isJa ? 'EN' : 'JP'}
          </button>
          
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-ink hover:text-maroon transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-3 mx-6 rounded-2xl glass-card overflow-hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-sm font-medium text-ink hover:text-maroon transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-xl bg-gradient-to-r from-maroon to-violet text-cream px-4 py-3 text-sm font-semibold text-center"
            >
              {isJa ? '辛口アドバイスを始める' : 'Take the First Step'}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
