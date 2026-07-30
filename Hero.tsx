import { ArrowDown, Sparkles, Flame } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { lang } = useLanguage();
  const isJa = lang === 'ja';

  return (
    <section className="relative min-h-screen overflow-hidden bg-cream ambient-glow pt-32 pb-24">
      {/* Background decorative elements */}
      <div className="absolute top-[15%] left-[5%] w-[500px] h-[500px] rounded-full bg-gold/12 blur-[120px] -z-10" />
      <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-maroon/10 blur-[140px] -z-10" />
      <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-violet/12 blur-[80px] -z-10" />
      <div className="absolute bottom-[30%] left-[25%] w-[350px] h-[350px] rounded-full bg-olive/8 blur-[100px] -z-10" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          {/* Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-maroon/[0.04] px-4 py-1.5 text-[11px] font-semibold tracking-[0.1em] uppercase text-maroon">
              <Flame className="h-3.5 w-3.5" />
              {isJa ? '優しく · 明確に · 辛口に' : 'Kind · Clear · Spicy'}
            </div>

            <h1 className={`font-editorial ${isJa ? 'text-5xl sm:text-6xl lg:text-[4.5rem] tracking-normal leading-tight font-medium' : 'text-5xl sm:text-6xl lg:text-[5.5rem] tracking-[-0.03em] leading-[0.92]'} text-ink`}>
              {isJa ? (
                <>
                  許可を待つのはやめて、<br />
                  <span className="relative inline-block mt-2">
                    <span className="italic font-display text-maroon">主導権を握ろう。</span>
                    <svg className="absolute -bottom-2 left-0 w-full h-2.5" viewBox="0 0 200 12" preserveAspectRatio="none">
                      <path d="M0 6 Q50 0 100 6 T200 6" fill="none" stroke="#C5A059" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </span>
                </>
              ) : (
                <>
                  Stop waiting <br />
                  for <span className="italic font-display text-maroon">permission.</span>
                  <br />
                  Take{' '}
                  <span className="relative inline-block">
                    <span className="italic font-display text-maroon">control.</span>
                    <svg className="absolute -bottom-2 left-0 w-full h-2.5" viewBox="0 0 200 12" preserveAspectRatio="none">
                      <path d="M0 6 Q50 0 100 6 T200 6" fill="none" stroke="#C5A059" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </span>
                </>
              )}
            </h1>

            <p className="font-sans text-lg sm:text-xl text-ink-muted leading-relaxed max-w-md">
              {isJa 
                ? '耳の痛いことも言ってくれる友達 — 言い訳を見抜き、大胆な一歩を後押しし、自発的な行動を促す。自信を持ち、自分の人生の主導権を取り戻すための、辛口アドバイス。'
                : 'That friend with the spicy mouth — the one who calls out your excuses, backs your boldest moves, and pushes you to take initiative. Honesty that makes you more confident and puts you back in control of your own life.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-maroon to-violet text-cream px-8 py-4 text-[15px] font-bold shadow-xl shadow-maroon/30 hover:shadow-maroon/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Sparkles className="h-4 w-4 text-gold-bright" />
                {isJa ? '最初の一歩を踏み出す' : 'Take the First Step'}
              </a>
              <a
                href="#showcase"
                className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md border border-maroon/15 text-ink px-7 py-4 text-[15px] font-semibold hover:bg-white hover:border-maroon/30 hover:shadow-lg transition-all duration-300"
              >
                {isJa ? '提供内容を見る' : "See What's Brewing"}
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>

            {/* Micro-stats */}
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="font-editorial text-3xl font-semibold text-ink leading-none">3x</div>
                <div className="text-[11px] text-ink-muted font-medium tracking-wide mt-1">
                  {isJa ? '自発的な行動' : 'MORE INITIATIVE'}
                </div>
              </div>
              <div className="w-px h-10 bg-gradient-to-b from-transparent via-maroon/15 to-transparent" />
              <div>
                <div className="font-editorial text-3xl font-semibold text-ink leading-none">0</div>
                <div className="text-[11px] text-ink-muted font-medium tracking-wide mt-1">
                  {isJa ? 'フィルターなし' : 'FILTERS USED'}
                </div>
              </div>
              <div className="w-px h-10 bg-gradient-to-b from-transparent via-maroon/15 to-transparent" />
              <div>
                <div className="font-editorial text-3xl font-semibold text-ink leading-none">100%</div>
                <div className="text-[11px] text-ink-muted font-medium tracking-wide mt-1">
                  {isJa ? '100%自分次第' : 'IN YOUR CONTROL'}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image Card */}
          <div className="relative">
            {/* Floating decorative shape */}
            <div className="absolute top-[-10%] right-[5%] w-32 h-32 rounded-full bg-gradient-to-br from-gold/30 to-violet/20 blur-2xl float-gentle -z-10 hidden lg:block" />

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(107,31,46,0.3)] border border-maroon/10">
              <img
                src="/hero-spicy.jpg"
                alt="That friend with spicy mouth — honest advice with attitude"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/30 via-transparent to-transparent" />
            </div>

            {/* Floating glass badge */}
            <div className="absolute -bottom-6 -left-4 lg:-left-8 glass-card rounded-2xl p-5 shadow-2xl shadow-maroon/10 max-w-[240px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-2 w-2 rounded-full bg-maroon animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-maroon">
                  {isJa ? 'リアルタイム助言' : 'Live Advice'}
                </span>
              </div>
              <p className="font-editorial text-[17px] text-ink leading-snug italic">
                {isJa 
                  ? '「タイミングを待ってばかりだね。自分で作って、今日踏み出しなよ。」' 
                  : '"You keep waiting for the right moment. Make it. Take the first step today."'}
              </p>
            </div>

            {/* Top right decorative */}
            <div className="absolute -top-4 -right-4 lg:-right-6 glass-card rounded-2xl px-4 py-3 shadow-xl shadow-maroon/10">
              <p className="text-[11px] font-bold text-gold tracking-wide">
                {isJa ? '辛口注意' : 'SPICY ALERT'}
              </p>
              <p className="text-xs text-ink-muted">
                {isJa ? '忖度一切なし' : 'No filters applied'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
