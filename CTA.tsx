import { Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CTA() {
  const { lang } = useLanguage();
  const isJa = lang === 'ja';

  return (
    <section className="relative overflow-hidden" style={{background: 'linear-gradient(135deg, #4A0F1F 0%, #2E1A3D 50%, #2A1F1A 100%)'}}>
      <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] rounded-full bg-gold/15 blur-[120px]" />
      <div className="absolute bottom-[-30%] right-[10%] w-[600px] h-[600px] rounded-full bg-maroon/20 blur-[140px]" />
      <div className="absolute top-[40%] left-[10%] w-[400px] h-[400px] rounded-full bg-violet/15 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-28 text-center">
        <div className="space-y-8">
          <h2 className={`font-editorial ${isJa ? 'text-5xl sm:text-6xl font-medium' : 'text-5xl sm:text-7xl lg:text-8xl'} text-cream leading-[0.85] tracking-[-0.04em]`}>
            {isJa ? (
              <>
                主導権を<br />
                <span className="italic font-display text-gold-bright">取り戻せ。</span>
              </>
            ) : (
              <>
                Take back <br />
                <span className="italic font-display text-gold-bright">control.</span>
              </>
            )}
          </h2>

          <p className="text-lg sm:text-xl text-cream/60 max-w-lg mx-auto leading-relaxed">
            {isJa 
              ? '優しく、明確に、辛口に。自分に合った熱さを選んで、自信をつけ、自分の人生を取り戻しましょう。' 
              : 'Kind, clear, or spicy — pick your heat and start becoming the most confident, in-control version of yourself.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-maroon-deep px-10 py-5 text-base font-extrabold shadow-[0_20px_50px_-10px_rgba(197,160,89,0.5)] hover:shadow-[0_30px_60px_-15px_rgba(197,160,89,0.6)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Sparkles className="h-5 w-5" />
              {isJa ? '最初の一歩を踏み出す' : 'Take the First Step'}
            </a>
          </div>

          <p className="text-xs text-gold-bright/30 font-medium tracking-wide">
            {isJa 
              ? 'スパムなし。忖度なし。1クリックで解除可能。辛口の友達は、いつでも本気でいてくれます。' 
              : 'No spam. No fluff. Unsubscribe in one click. The friend stays real either way.'}
          </p>
        </div>
      </div>
    </section>
  );
}
