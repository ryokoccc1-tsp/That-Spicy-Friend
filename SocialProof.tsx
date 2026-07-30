import { Eye, TrendingUp, ShieldCheck, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function SocialProof() {
  const { lang } = useLanguage();
  const isJa = lang === 'ja';

  const stats = [
    { icon: TrendingUp, value: '3x', label: isJa ? '自発的な行動が3倍に' : 'More initiative taken' },
    { icon: ShieldCheck, value: '0%', label: isJa ? '言い訳の許容度0%' : 'Excuses accepted' },
    { icon: Eye, value: '92%', label: isJa ? '自信がついたと実感' : 'Feel more confident' },
    { icon: Users, value: '12K', label: isJa ? '主導権を取り戻した人' : 'People took back control' },
  ];

  return (
    <section id="proof" className="relative bg-parchment overflow-hidden">
      <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-gold/8 blur-[100px] -z-0" />
      <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-olive/10 blur-[120px] -z-0" />
      
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-14 space-y-3">
          <h2 className={`font-editorial ${isJa ? 'text-3xl sm:text-4xl font-medium' : 'text-4xl sm:text-5xl'} text-ink leading-[1.05] tracking-tight`}>
            {isJa ? (
              <>
                「準備ができてから」なんて<span className="italic font-display text-maroon">待っていたら、</span>
                <br className="hidden sm:block" /> 一生終わらない。
              </>
            ) : (
              <>
                If you're waiting to feel <span className="italic font-display text-maroon">ready</span>,
                <br className="hidden sm:block" /> you'll wait forever.
              </>
            )}
          </h2>
          <p className="text-ink-muted text-lg max-w-lg mx-auto">
            {isJa 
              ? '何千人もの人が、迷うのをやめて、辛口のアドバイスで自分の人生を歩み始めています。' 
              : 'Thousands stopped second-guessing and started running their own lives.'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="glass-card rounded-3xl p-7 text-center hover:-translate-y-1 hover:shadow-2xl hover:shadow-maroon/10 transition-all duration-500 group"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-br from-gold-soft/40 to-maroon/10 mb-5 group-hover:scale-105 transition-transform duration-300">
                <Icon className="h-5 w-5 text-maroon" />
              </div>
              <div className="font-editorial text-4xl sm:text-5xl text-ink font-semibold leading-none mb-2">
                {value}
              </div>
              <div className="text-sm text-ink-muted font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
