// src/components/ui/HeroMassiveWords.tsx
import { motion } from 'framer-motion';

export function HeroMassiveWords() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#141010] px-6 py-10 sm:px-10 sm:py-14">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#f6f1eb]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.span
          className="block"
          initial={{ opacity: 0.25 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          We craft exceptional web experiences
          <br className="hidden sm:block" />
          that define brand identity
        </motion.span>
      </motion.h1>
    </div>
  );
}