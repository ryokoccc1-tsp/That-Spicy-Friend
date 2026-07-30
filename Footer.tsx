import { Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();
  const isJa = lang === 'ja';

  const links = [
    { label: isJa ? '実績' : 'Proof', href: '#proof' },
    { label: isJa ? '特徴' : 'Features', href: '#features' },
    { label: isJa ? '提供内容' : 'Showcase', href: '#showcase' },
    { label: isJa ? '変化' : 'Benefits', href: '#benefits' },
    { label: isJa ? '体験談' : 'Stories', href: '#stories' },
    { label: isJa ? '料金' : 'Pricing', href: '#pricing' },
  ];

  return (
    <footer className="bg-[#1F1418] border-t border-gold/10">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-maroon to-violet flex items-center justify-center shadow-lg shadow-maroon/30">
                <Sparkles className="h-4 w-4 text-gold-bright" />
              </div>
              <span className="font-editorial text-xl font-semibold text-cream tracking-tight leading-none">
                Spicy <span className="italic font-display text-gold-bright">Friend</span>
              </span>
            </a>
            <p className="text-sm text-cream/40 max-w-xs leading-relaxed">
              {isJa 
                ? '気の良い答えに疲れた人のための辛口トーク。本当に変化をもたらす、率直なアドバイス。' 
                : 'Real talk for people tired of sugarcoated answers. Honest advice that actually changes things.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-cream/50 hover:text-gold-bright transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[11px] text-cream/20">
            {isJa 
              ? 'That Friend With Spicy Mouth — 2026. 無断複写・転載を禁じます。' 
              : 'That Friend With Spicy Mouth — 2026. All rights reserved.'}
          </p>
          <p className="text-[11px] text-cream/20">
            {isJa ? '忖態なしで構築。' : 'Built with zero filters applied.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
