import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { lang } = useLanguage();
  const isJa = lang === 'ja';

  const testimonials = [
    {
      tag: isJa ? '恋愛' : 'Personal',
      quote: isJa
        ? '5年間、行き止まりの恋愛を続けていました。辛口の友達に「彼は忙しいんじゃない。あなたを選んでいないだけだよ」と言われて、本当に傷つきました。でも、彼女が正しかった。今は、ちゃんと向き合ってくれる人と婚約しています。'
        : "I spent five years in a relationship going nowhere. My spicy friend finally said it: 'He's not busy — he's just not choosing you.' It hurt. She was right. I'm engaged now, to someone who actually shows up.",
      author: isJa ? '田中 美咲' : 'Misaki Tanaka',
      role: isJa ? '32歳・会社員' : 'Office worker, 32 — Tokyo',
      image: '/testimonial-1.jpg',
    },
    {
      tag: isJa ? 'ビジネス' : 'Business',
      quote: isJa
        ? '辛口の友達に「そのビジネスプランには市場がない」と言われました。彼女は正しかった。ピボットして、今は利益が出ています。耳の痛い一言が、会社を救ってくれました。'
        : "My 'spicy friend' told me my business plan had no market. She was right. I pivoted. I'm profitable now. One uncomfortable sentence saved my company.",
      author: isJa ? '高橋 翔太' : 'Shota Takahashi',
      role: isJa ? '起業家・Kaze Studio代表' : 'Founder, Kaze Studio',
      image: '/testimonial-2.jpg',
    },
    {
      tag: isJa ? '生き方' : 'Personal',
      quote: isJa
        ? '29年間、自分のこと以外には全部イエスを言い続けてきました。たった一度のセッションで「あなたは優しいんじゃない。怖いだけだよ」と言われて、目が覚めました。引っ越して、自分をすり減らす関係を手放して。やっと、人生が自分のものになりました。'
        : "For 29 years I said yes to everyone but myself. One session, and I finally heard it: 'You're not being kind — you're being scared.' I moved cities, cut the ties that drained me, and my life finally feels like mine.",
      author: isJa ? '山本 陽子' : 'Yoko Yamamoto',
      role: isJa ? 'フリーランスデザイナー' : 'Freelance designer — Osaka',
      image: '/hero-spicy.jpg',
    },
  ];

  return (
    <section id="stories" className="relative bg-parchment overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-violet/[0.06] blur-[120px] -z-0" />

      <div className="relative mx-auto max-w-6xl px-6 py-28">
        <div className="text-center mb-14 space-y-3">
          <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-maroon">
            {isJa ? 'リアルな体験談' : 'Real Stories'}
          </span>
          <h2 className={`font-editorial ${isJa ? 'text-3xl sm:text-5xl font-medium' : 'text-4xl sm:text-6xl'} text-ink leading-[0.95] tracking-tight`}>
            {isJa ? (
              <>
                辛口のアドバイスを浴びて、<br />
                そして<span className="italic font-display text-maroon">人生を変えた。</span>
              </>
            ) : (
              <>
                They got <span className="italic font-display text-maroon">roasted</span>. <br />
                Then their <span className="italic font-display text-gold">lives changed</span>.
              </>
            )}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ tag, quote, author, role, image }) => (
            <div
              key={author}
              className="group relative rounded-[2.5rem] overflow-hidden bg-cream shadow-[0_20px_50px_-12px_rgba(107,31,46,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(107,31,46,0.18)] transition-all duration-500 hover:-translate-y-1 border border-maroon/5 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={image} alt={author} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/40 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-maroon-deep/70 backdrop-blur-md border border-gold/25 px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-gold-bright uppercase">
                  {tag}
                </span>
              </div>
              <div className="p-7 space-y-4 flex flex-col grow">
                <Quote className="h-6 w-6 text-maroon/40" />
                <blockquote className={`font-editorial text-ink leading-snug italic grow ${isJa ? 'text-[19px]' : 'text-xl'}`}>
                  "{quote}"
                </blockquote>
                <div className="pt-2 border-t border-maroon/10">
                  <p className="font-sans text-sm font-bold text-ink">{author}</p>
                  <p className="text-xs text-ink-muted">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
