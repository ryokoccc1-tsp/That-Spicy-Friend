import { ArrowUpRight, Sparkles, MessageCircle, BookOpen, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ProductShowcase() {
  const { lang } = useLanguage();
  const isJa = lang === 'ja';

  const cards = [
    {
      icon: MessageCircle,
      label: isJa ? 'クリア・セッション' : 'Clarity Sessions',
      stat: '15 min',
      desc: isJa 
        ? '迷いを大胆な一歩に変える、辛口でフィルターのないフィードバック。' 
        : 'Direct, unfiltered feedback that turns hesitation into your next bold move.',
    },
    {
      icon: BookOpen,
      label: isJa ? '主導権を取り戻すノート' : 'The Take-Control Notebook',
      stat: '48 pages',
      desc: isJa 
        ? '自信を築き、毎日自発的に行動するためのガイド付きジャーナル。' 
        : 'A guided journal that builds confidence and gets you taking initiative daily.',
    },
    {
      icon: Compass,
      label: isJa ? 'コース：自発性101' : 'Course: Initiative 101',
      stat: '6 modules',
      desc: isJa 
        ? '自分を信じ、決断を下し、辛口のアドバイスを活かして自分の人生を歩む方法を学びます。' 
        : 'Learn to trust yourself, make the call, and run your own life on your terms.',
    },
  ];

  return (
    <section id="showcase" className="relative overflow-hidden" style={{background: 'linear-gradient(135deg, #2E1A3D 0%, #4A0F1F 50%, #2A1F1A 100%)'}}>
      {/* Ambient glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-gold/8 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-15%] w-[60vw] h-[60vw] rounded-full bg-violet/15 blur-[140px]" />
      <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-maroon/12 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <div className="text-center mb-16 space-y-3">
          <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-gold-bright">
            {isJa ? 'ツールキット（辛口アドバイス）' : 'The Toolkit'}
          </span>
          <h2 className={`font-editorial ${isJa ? 'text-3xl sm:text-4xl font-medium' : 'text-4xl sm:text-6xl'} text-cream leading-[0.95] tracking-tight`}>
            {isJa ? (
              <>
                またある<span className="italic font-display text-gold-bright">モチベーション系</span>メルマガではありません。
                <br /> 自分の人生を取り戻すための、本物の辛口アドバイスツールキット。
              </>
            ) : (
              <>
                Not another <span className="italic font-display text-gold-bright">motivational</span> newsletter.
                <br /> A real toolkit for taking control of your life.
              </>
            )}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, label, stat, desc }) => (
            <a
              href="#pricing"
              key={label}
              className="group relative rounded-[2rem] overflow-hidden bg-white/[0.04] backdrop-blur-xl border border-gold/10 p-8 hover:bg-white/[0.07] hover:border-gold/30 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-15px_rgba(197,160,89,0.2)]"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="h-5 w-5 text-gold-bright" />
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-gold/20 to-maroon/20 flex items-center justify-center border border-gold/15">
                  <Icon className="h-5 w-5 text-gold-bright" />
                </div>
                <div>
                  <h3 className="font-editorial text-xl text-cream font-semibold leading-tight">{label}</h3>
                  <span className="text-[10px] font-medium text-gold tracking-wide">{stat}</span>
                </div>
              </div>

              <p className="text-cream/50 text-sm leading-relaxed mb-6">{desc}</p>

              <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-gold group-hover:text-cream transition-colors duration-300">
                <Sparkles className="h-3.5 w-3.5" />
                {isJa ? 'ここから始める' : 'START HERE'}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 px-7 py-3.5 text-sm font-semibold text-cream hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
          >
            {isJa ? '料金プランを見る' : 'See Full Pricing'}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
