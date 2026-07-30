import { useState } from 'react';
import { ArrowLeft, Sparkles, Check, Globe, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function SpicyPage() {
  const { lang, toggleLang } = useLanguage();
  const isJa = lang === 'ja';
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', email: '' });
  const [errors, setErrors] = useState<{ fullName?: string; email?: string }>({});

  const validate = () => {
    const newErrors: { fullName?: string; email?: string } = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = isJa ? '氏名を入力してください' : 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = isJa ? 'メールアドレスを入力してください' : 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = isJa ? '有効なメールアドレスを入力してください' : 'Please enter a valid email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const pricing = document.getElementById('pricing');
      if (pricing) pricing.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream text-ink font-sans pt-24">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-maroon to-violet mb-8">
            <Sparkles className="h-8 w-8 text-gold-bright" />
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl text-ink mb-4">
            {isJa ? '登録完了！' : 'You\'re in!'}
          </h1>
          <p className="text-ink-muted text-lg mb-8">
            {isJa 
              ? 'スパイシープランへようこそ。辛口の友達からのVIPウェルカムパッケージが送信されました。' 
              : 'Welcome to the Spicy plan. Your VIP welcome package from the spicy friend is on the way.'}
          </p>
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-maroon to-violet text-cream px-6 py-3 text-sm font-semibold hover:from-maroon-deep hover:to-violet-deep transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            {isJa ? 'トップページに戻る' : 'Back to home'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream text-ink font-sans pt-24">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-maroon transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {isJa ? '戻る' : 'Back'}
          </button>
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-[12px] font-semibold text-ink-muted hover:text-maroon transition-colors"
          >
            <Globe className="h-4 w-4" />
            {isJa ? 'EN' : 'JP'}
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Plan details */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.06] px-4 py-1.5 text-[11px] font-semibold tracking-[0.1em] uppercase text-maroon">
              <span className="text-xl leading-none">🔥</span>
              {isJa ? 'スパイシープラン' : 'Spicy Plan'}
            </div>

            <h1 className="font-editorial text-5xl sm:text-6xl text-ink leading-[0.92] tracking-[-0.03em]">
              {isJa ? (
                <>
                  <span className="italic font-display text-maroon">フルパワー</span>
                  <br />
                  で成長しよう。
                </>
              ) : (
                <>
                  <span className="italic font-display text-maroon">Go full heat.</span>
                  <br />
                  Accelerate growth.
                </>
              )}
            </h1>

            <p className="text-ink-muted text-lg leading-relaxed max-w-md">
              {isJa 
                ? '辛口の友達の最上位プラン。毎週30分のプライベートセッション、月1回の人生・目標レビュー、そして直接テキストアクセス。自信を最大限に高め、自分の人生を完全にコントロールしましょう。'
                : 'The ultimate experience with the spicy friend. Weekly 30-min private sessions, monthly 1:1 life & goals reviews, and direct text access. Maximize your confidence and take full control of your life.'}
            </p>

            <div className="pt-2">
              <div className="font-editorial text-5xl font-bold text-ink mb-1">
                {isJa ? '¥7,980' : '$49'}
              </div>
              <p className="text-ink-muted text-sm">
                {isJa ? '月額 • いつでも解約可能' : 'per month • Cancel anytime'}
              </p>
            </div>

            <ul className="space-y-3 pt-2">
              {(isJa 
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
                  ]
              ).map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5 bg-maroon/10">
                    <Check className="h-3 w-3 text-maroon" />
                  </span>
                  <span className="text-[15px] text-ink">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="glass-card rounded-[2.5rem] p-8 shadow-[0_30px_60px_-15px_rgba(107,31,46,0.12)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet/20 to-maroon/20 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-gold-bright" />
              </div>
              <h2 className="font-editorial text-2xl text-ink font-semibold">
                {isJa ? 'スパイシーで始める' : 'Start with Spicy'}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[12px] font-bold tracking-[0.1em] uppercase text-maroon mb-2">
                  {isJa ? '氏名' : 'Full Name'}
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 rounded-xl border bg-white/70 focus:outline-none transition-all duration-300 ${
                    errors.fullName ? 'border-red-300 focus:border-red-400' : 'border-maroon/15 focus:border-maroon/40'
                  }`}
                  placeholder={isJa ? '例: 田中 太郎' : 'Jane Doe'}
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-[12px] text-red-500">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-[12px] font-bold tracking-[0.1em] uppercase text-maroon mb-2">
                  {isJa ? 'メールアドレス' : 'Email Address'}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 rounded-xl border bg-white/70 focus:outline-none transition-all duration-300 ${
                    errors.email ? 'border-red-300 focus:border-red-400' : 'border-maroon/15 focus:border-maroon/40'
                  }`}
                  placeholder={isJa ? 'example@email.com' : 'you@example.com'}
                />
                {errors.email && (
                  <p className="mt-1.5 text-[12px] text-red-500">{errors.email}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-maroon to-violet text-cream py-4 px-6 text-[15px] font-bold shadow-xl shadow-maroon/25 hover:shadow-maroon/40 hover:-translate-y-0.5 transition-all duration-300 mt-2"
              >
                <Send className="h-4 w-4" />
                {isJa ? 'スパイシーで始める（¥7,980/月）' : 'Start with Spicy ($49/month)'}
              </button>

              <p className="text-[11px] text-ink-muted text-center">
                {isJa 
                  ? 'スパムは送りません。いつでも1クリックで解除できます。' 
                  : 'No spam. Unsubscribe anytime. We respect your privacy.'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
