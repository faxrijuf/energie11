// src/components/ui/HeroMassiveWords.tsx
import { motion } from 'framer-motion';

export function HeroMassiveWords() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-[#0f0d0d] via-[#1c1512] to-[#241510] px-6 py-12 sm:px-10 sm:py-16 shadow-[0_22px_60px_rgba(0,0,0,0.35)]">
      <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-gradient-to-br from-[#ff9f7a]/60 via-[#e65a4f]/40 to-transparent blur-3xl" />
      <div className="absolute -right-10 bottom-0 h-52 w-52 rounded-full bg-gradient-to-t from-[#f6f1eb]/25 via-transparent to-transparent blur-3xl" />

      <motion.div
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-[#f6f1eb]/80"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#e65a4f] shadow-[0_0_0_6px_rgba(230,90,79,0.25)]" />
        Boutique web studio · 2025
      </motion.div>

      <motion.h1
        className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#f6f1eb] leading-[1.05]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.span
          className="block"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          Signature websites for brands that want to feel premium online.
          <br className="hidden sm:block" />
          Crafted to be fast, intuitive, and unmistakably yours.
        </motion.span>
      </motion.h1>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          'Identity-led art direction',
          'Conversion-focused journeys',
          'Hands-on senior delivery',
        ].map(item => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[13px] text-[#f6f1eb]/85 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}