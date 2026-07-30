import { TrendingUp, Heart, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Benefits() {
  const { lang } = useLanguage();
  const isJa = lang === 'ja';

  const benefits = [
    {
      title: isJa ? '気の良いアドバイスに時間を浪費しない' : 'Stop Wasting Time on Advice That Feels Good',
      body: isJa 
        ? '気の良い意見を集めるのに何ヶ月も費やす人は多いです。私たちはノイズを切り捨て、今日変えるべきことを正確に、辛口で伝えます。' 
        : 'Most people spend months collecting opinions that validate their excuses. We cut through the noise and tell you exactly what needs to change — today.',
      metric: isJa ? '3倍速い成長' : '3x faster progress',
      icon: TrendingUp,
    },
    {
      title: isJa ? '本物の自信を身につける' : 'Build Real Confidence (Not Fake Positivity)',
      body: isJa 
        ? '本物の自信は、現実から目を背けることではなく、厳しい真実を乗り越えることで生まれます。辛口のアドバイスを乗り越えることで、あなたは無敵になります。' 
        : 'Real confidence comes from surviving hard truths, not avoiding them. Our approach strengthens your ability to handle reality — which makes you unstoppable.',
      metric: isJa ? '回復力の向上' : 'More resilient',
      icon: Heart,
    },
    {
      title: isJa ? '自信を保ちながら成長する' : 'Keep Your Ego Intact (Actually)',
      body: isJa 
        ? '皮肉なことに、辛口のアドバイスを最も恐れる人ほど、それを最も必要としています。一度経験すれば、恐れは消え、成長は加速します。' 
        : 'Ironically, the people most afraid of honest advice are the ones who need it most. Once you experience it, the fear disappears and the growth accelerates.',
      metric: isJa ? '恐れの排除' : 'Fear eliminated',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="benefits" className="relative bg-cream overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-maroon/[0.04] blur-[100px]" />
        <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-gold/[0.06] blur-[120px]" />
        <div className="absolute top-[50%] left-[50%] w-[350px] h-[350px] rounded-full bg-olive/[0.05] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-12 mb-4">
            <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-maroon mb-4">
              {isJa ? '変化の効果' : 'The Benefits'}
            </span>
            <h2 className={`font-editorial ${isJa ? 'text-3xl sm:text-5xl font-medium' : 'text-4xl sm:text-6xl'} text-ink leading-[0.95] tracking-tight max-w-3xl`}>
            {isJa ? (
              <>
                辛口のアドバイスを一度受ければ、<br />
                <span className="italic font-display text-maroon">また戻ってくる</span>理由。
              </>
            ) : (
              <>
                Why people come back <span className="italic font-display text-maroon">after</span> they leave.
              </>
            )}
          </h2>
          <p className="text-ink-muted text-base leading-relaxed max-w-sm mt-4">
            {isJa 
              ? '辛口のアドバイスを一度体験すると、気の良い言葉ではなく、本物の成長を求めるようになります。' 
              : 'Once you experience real advice, you stop settling for fluff and start demanding real growth.'}
          </p>
          </div>

          <div className="lg:col-span-4 lg:offset-1 space-y-5">
            {benefits.map(({ title, body, metric, icon: Icon }) => (
              <div
                key={title}
                className="group rounded-[2rem] bg-white/60 border border-maroon/[0.08] p-7 hover:bg-white hover:shadow-[0_20px_50px_-12px_rgba(107,31,46,0.12)] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-maroon/10 to-gold/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="h-5 w-5 text-maroon" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.12em] text-maroon bg-maroon/[0.06] px-2.5 py-1 rounded-full">{metric}</span>
                </div>
                <h3 className="font-editorial text-xl text-ink font-semibold mb-2 leading-snug">{title}</h3>
                <p className="text-[14px] text-ink-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-6 relative">
            <div className="sticky top-32 rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(107,31,46,0.2)] border border-maroon/10">
              <img
                src="/testimonial-1.jpg"
                alt="Person smiling — honest advice brought clarity"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl p-5 bg-maroon-deep/80 backdrop-blur-xl border border-gold/20 shadow-2xl">
                  <p className="font-editorial text-xl text-cream italic leading-snug mb-3">
                    {isJa 
                      ? '「ついに言い訳をやめて、行動を起こし始めました。」' 
                      : '"I finally stopped making excuses and started making moves."'}
                  </p>
                  <p className="text-xs text-gold-bright/80 font-medium">
                    {isJa ? '— 実際の読者（購読6ヶ月）' : '— Real reader, 6 months in'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
