import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Pricing() {
  const { lang } = useLanguage();
  const isJa = lang === 'ja';

  const plans = [
    {
      name: isJa ? 'Kind (カインド)' : 'Kind',
      tagline: isJa ? '優しく添える、本音。' : 'Honesty, served gently.',
      price: isJa ? '無料' : 'Free',
      period: '',
      heat: '🫶',
      features: isJa 
        ? [
            '週刊・自信をつけるメルマガ',
            '3つのセルフスターターガイド',
            'コミュニティチャット',
            '最初の一歩を踏み出す優しい後押し',
            'クレジットカード不要',
          ]
        : [
            'Weekly confidence newsletter (2 min)',
            'Access to 3 self-starter guides',
            'Community chat access',
            'Gentle nudges to take that first step',
            'No credit card needed',
          ],
      cta: isJa ? 'カインドで始める' : 'Start Kind',
      href: '/kind',
      highlight: false,
    },
    {
      name: isJa ? 'Clear (クリア)' : 'Clear',
      tagline: isJa ? '曇りのない、辛口の真実。' : 'The truth, no fog.',
      price: isJa ? '¥2,980' : '$19',
      period: isJa ? '/月' : '/month',
      heat: '🌶️',
      features: isJa
        ? [
            'Kindの全内容',
            '週1回の15分クリア・セッション',
            '主導権を取り戻すノート（48P）',
            '自発性101コースへのアクセス',
            '12時間以内のストレートな回答',
          ]
        : [
            'Everything in Kind',
            'Private 15-min clarity session / week',
            '48-page Take-Control Notebook',
            'Initiative 101 course access',
            'Straight answers within 12h',
          ],
      cta: isJa ? 'クリアを申し込む' : 'Get Clear',
      href: '/clear',
      highlight: true,
    },
    {
      name: isJa ? 'Spicy (スパイシー)' : 'Spicy',
      tagline: isJa ? 'フルパワーの辛口アドバイス。' : 'Full heat, full growth.',
      price: isJa ? '¥7,980' : '$49',
      period: isJa ? '/月' : '/month',
      heat: '🔥',
      features: isJa
        ? [
            'Clearの全内容',
            '週1回の30分プライベートセッション',
            '月1回の人生・目標レビュー',
            '新機能への早期アクセス',
            'LINE/SMSでの直接相談',
          ]
        : [
            'Everything in Clear',
            'Private 30-min session / week',
            '1-on-1 life & goals review / month',
            'Early access to new releases',
            'Direct text access to the friend',
          ],
      cta: isJa ? 'スパイシーに挑む' : 'Go Spicy',
      href: '/spicy',
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="relative bg-cream overflow-hidden">
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-gold/8 blur-[120px] -z-0" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-violet/8 blur-[120px] -z-0" />
      
      <div className="relative mx-auto max-w-6xl px-6 py-28">
        <div className="text-center mb-16 space-y-3">
          <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-maroon">
            {isJa ? '料金プラン' : 'Pricing'}
          </span>
          <h2 className={`font-editorial ${isJa ? 'text-4xl sm:text-5xl font-medium' : 'text-4xl sm:text-6xl'} text-ink leading-[0.95] tracking-tight`}>
            {isJa ? (
              <>
                優しく。明確に。<span className="italic font-display text-maroon">スパイシーに。</span>
              </>
            ) : (
              <>
                Kind. Clear. <span className="italic font-display text-maroon">Spicy.</span>
              </>
            )}
          </h2>
          <p className="text-ink-muted text-lg max-w-md mx-auto">
            {isJa 
              ? '自分が耐えられる「熱さ」を選んでください。どのレベルも、自信をつけ、自分の人生を取り戻すための辛口アドバイスです。' 
              : 'Choose how much heat you can handle. Every level is built to make you more confident and back in control of your own life.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map(({ name, tagline, price, period, heat, features, cta, href, highlight }) => (
            <div
              key={name}
              className={`relative rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                highlight
                  ? 'shadow-[0_40px_80px_-20px_rgba(107,31,46,0.4)] scale-[1.02] md:-translate-y-2 border border-gold/30'
                  : 'bg-white border border-maroon/[0.08] shadow-[0_20px_50px_-12px_rgba(107,31,46,0.08)] hover:shadow-[0_30px_60px_-15px_rgba(107,31,46,0.15)] hover:border-maroon/20'
              }`}
              style={highlight ? {background: 'linear-gradient(135deg, #2E1A3D 0%, #4A0F1F 60%, #2A1F1A 100%)'} : {}}
            >
              {highlight && (
                <div className="absolute top-0 right-0 bg-gradient-to-br from-gold to-gold-bright text-maroon-deep text-[10px] font-extrabold px-4 py-1.5 rounded-bl-xl tracking-wide uppercase shadow-lg shadow-gold/30">
                  {isJa ? '一番人気' : 'Most Popular'}
                </div>
              )}

              <div className={`p-8 ${highlight ? 'pt-12' : ''}`}>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-2xl leading-none" aria-hidden="true">{heat}</span>
                  <h3 className={`font-editorial text-2xl font-semibold ${highlight ? 'text-cream' : 'text-ink'}`}>
                    {name}
                  </h3>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`font-editorial text-5xl font-bold tracking-tight ${highlight ? 'text-cream' : 'text-ink'}`}>
                    {price}
                  </span>
                  <span className={`text-sm ${highlight ? 'text-gold-bright/70' : 'text-ink-muted'}`}>{period}</span>
                </div>
                <p className={`text-sm mb-7 font-editorial italic text-[15px] ${highlight ? 'text-gold-bright' : 'text-maroon'}`}>
                  {tagline}
                </p>

                <ul className="space-y-3 mb-8">
                  {features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <span className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5 ${highlight ? 'bg-gold/20' : 'bg-maroon/10'}`}>
                        <Check className={`h-3 w-3 ${highlight ? 'text-gold-bright' : 'text-maroon'}`} />
                      </span>
                      <span className={`text-sm leading-snug ${highlight ? 'text-cream/90' : 'text-ink'}`}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={href}
                  className={`inline-flex items-center justify-center gap-2.5 w-full rounded-full py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                    highlight
                      ? 'bg-gradient-to-r from-gold to-gold-bright text-maroon-deep shadow-lg shadow-gold/30 hover:shadow-gold/50'
                      : 'bg-gradient-to-r from-maroon to-violet text-cream shadow-md shadow-maroon/15 hover:shadow-maroon/30'
                  }`}
                >
                  {cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
