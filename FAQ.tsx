import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { lang } = useLanguage();
  const isJa = lang === 'ja';

  const faqs = [
    {
      q: isJa ? 'アドバイスは本当に辛口ですか？' : 'Is the advice really unfiltered?',
      a: isJa 
        ? 'はい。分かりやすくするための編集はしますが、気をつかうための編集はしません。結果が全てです。優しく伝えるべき時は優しく、直接言うべき時はストレートに伝えます。' 
        : 'Yes. We edit for clarity, not kindness. If something needs to be said gently, we say it gently. If it needs to be said directly, we say it directly. Your result matters more than your comfort.',
    },
    {
      q: isJa ? 'いつでも解約できますか？' : 'Can I cancel anytime?',
      a: isJa 
        ? 'はい。契約や隠れ費用は一切ありません。あなたを縛り付けたくはありません。アドバイスが役に立つからこそ、残っていてほしいのです。' 
        : 'Always. We have no contracts or hidden fees. If you leave, your advice archive stays with you. We want you here because it works, not because you feel trapped.',
    },
    {
      q: isJa ? '辛口セッションとはどんなものですか？' : 'What does a Spicy Session look like?',
      a: isJa 
        ? '1つの悩みを持ち込み、15分で解決します。雑談はなし。的確な質問と観察で、通話を終える前に実行可能なアクションプランをお伝えします。' 
        : 'A focused 15-minute call where you bring one problem and we solve it. No small talk, no agenda padding. Just rapid-fire questions, sharp observations, and a concrete action plan before you hang up.',
    },
    {
      q: isJa ? 'どのくらいで結果が出ますか？' : 'How quickly will I see results?',
      a: isJa 
        ? '魔法の言葉だからではなく、真実を避けるのをやめるから、ほとんどの人が最初の1週間で変化を感じます。実際の結果は、あなたがどれだけ速く行動するかにかかっています。' 
        : 'Most people see a shift in the first week — not because the advice is magical, but because they finally stop avoiding the truth. The actual results depend on how fast you act.',
    },
    {
      q: isJa ? '返金はありますか？' : 'Are there refunds?',
      a: isJa 
        ? '初回セッション後に「これじゃ自分の悩みが解決できそうにない」と感じた場合は、全額返金いたします。手続きや問い合わせは一切不要です。私たちは、提供するアドバイスの価値を自信を持っています。' 
        : "If you feel like the advice isn't hitting the mark after your first session, we refund the month. No forms, no arguments. We stand by what we deliver.",
    },
  ];

  return (
    <section className="relative bg-parchment overflow-hidden">
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-olive/8 blur-[120px] -z-0" />
      
      <div className="relative mx-auto max-w-3xl px-6 py-28">
        <div className="text-center mb-14 space-y-3">
            <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-maroon">
            {isJa ? 'よくある質問（辛口FAQ）' : 'FAQ'}
          </span>
          <h2 className={`font-editorial ${isJa ? 'text-3xl sm:text-4xl font-medium' : 'text-4xl sm:text-5xl'} text-ink leading-[0.95] tracking-tight`}>
            {isJa ? (
              <>
                みんなが本当に<span className="italic font-display text-maroon">気になる</span>疑問。
              </>
            ) : (
              <>
                Questions people <span className="italic font-display text-maroon">actually ask.</span>
              </>
            )}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map(({ q, a }, i) => (
            <div
              key={q}
              className={`rounded-[2rem] overflow-hidden transition-all duration-300 border ${
                openIndex === i 
                  ? 'bg-white shadow-[0_20px_50px_-15px_rgba(107,31,46,0.15)] border-maroon/15' 
                  : 'bg-white/50 border-maroon/5 hover:bg-white/70'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-5.5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className={`font-editorial ${isJa ? 'text-lg font-bold' : 'text-lg sm:text-xl font-medium'} text-ink leading-snug pr-4`}>{q}</span>
                <span
                  className={`flex-shrink-0 h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === i ? 'bg-gradient-to-br from-maroon to-violet text-gold-bright rotate-0' : 'bg-maroon/10 text-maroon'
                  }`}
                >
                  {openIndex === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  openIndex === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-7 pb-6 text-ink-muted text-[15px] leading-relaxed">
                  {a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
