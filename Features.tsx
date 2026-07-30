import { Zap, Shield, HeartHandshake, Flame } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { lang } = useLanguage();
  const isJa = lang === 'ja';

  const features = [
    {
      icon: Flame,
      title: isJa ? '成長につなげる辛口アドバイス' : 'Honesty That Builds You Up',
      desc: isJa 
        ? 'あなたを小さくしている言い訳を指摘し、それでも進む自信を手渡します。必要な時は優しく、ふさわしい時は辛口に。' 
        : 'We call out the excuses keeping you small — then hand you the confidence to move anyway. Kind when you need it, spicy when you deserve it.',
      accent: 'from-maroon to-violet',
    },
    {
      icon: Zap,
      title: isJa ? '行動へのこだわり' : 'Bias Toward Action',
      desc: isJa 
        ? '昼休みには消えてしまうような曖昧なモチベーションは不要。すべてのアドバイスは、今日から実行できる具体的なアクションで終わります。' 
        : 'No vague motivation that fades by lunch. Every conversation ends with one clear step you can take today to move your life forward.',
      accent: 'from-gold to-maroon',
    },
    {
      icon: Shield,
      title: isJa ? '飾らない自信' : 'Confidence Without the Fluff',
      desc: isJa 
        ? '本物の自信は、アファメーションではなく困難なことを成し遂げることで生まれます。辛口のアドバイスを乗り越えることで、本物の自信を身につけましょう。' 
        : 'Real confidence comes from doing hard things, not affirmations. We help you build it the honest way — one bold move at a time.',
      accent: 'from-violet to-gold',
    },
    {
      icon: HeartHandshake,
      title: isJa ? '友達レベルの信頼' : 'Friend-Level Trust',
      desc: isJa 
        ? 'フォロワー数ではなく、本当の人間関係に基づいています。あなたの名前、物語、そして後回しにしている目標を、私たちは覚えています。' 
        : 'Built on real relationships, not follower counts. We remember your name, your story, and the goals you keep putting off.',
      accent: 'from-olive to-maroon',
    },
  ];

  return (
    <section id="features" className="relative bg-cream overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Sticky intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-maroon">
              {isJa ? '選ばれる理由' : 'Why It Works'}
            </span>
            <h2 className={`font-editorial ${isJa ? 'text-[2.5rem] font-medium' : 'text-[3rem]'} leading-[0.95] tracking-[-0.03em] text-ink`}>
              {isJa ? (
                <>
                  コーチでもなく。<br />
                  グルでもなく。<br />
                  ただの<span className="italic font-display text-maroon">「辛口の友達」。</span>
                </>
              ) : (
                <>
                  Not a <span className="italic font-display text-maroon">coach</span>. <br />
                  Not a <span className="italic font-display text-violet">guru</span>. <br />
                  Just <span className="italic font-display text-gold">that friend.</span>
                </>
              )}
            </h2>
            <p className="text-ink-muted text-base leading-relaxed max-w-sm">
              {isJa 
                ? 'もっと自信を持ち、自発的に動き、自分の人生のハンドルを再び握るための、辛口のアドバイスシステムを作りました。' 
                : 'We built the honest advice we all wish we had — the kind that makes you more confident, gets you taking initiative, and hands the steering wheel of your life back to you.'}
            </p>
          </div>

          {/* Feature cards */}
          <div className="lg:col-span-7 space-y-5">
            {features.map(({ icon: Icon, title, desc, accent }) => (
              <a
                href="#pricing"
                key={title}
                className="group block glass-card rounded-[2rem] p-7 lg:p-9 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-15px_rgba(107,31,46,0.2)] relative overflow-hidden border border-maroon/5 hover:border-maroon/15"
              >
                <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${accent} opacity-80 group-hover:h-1.5 transition-all duration-500`} />
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center shadow-lg shadow-maroon/15 group-hover:scale-[1.08] transition-transform duration-500`}>
                      <Icon className="h-6 w-6 text-cream" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-editorial text-2xl font-semibold text-ink leading-snug group-hover:text-maroon transition-colors duration-300">{title}</h3>
                    <p className="text-ink-muted text-[15px] leading-relaxed">{desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
