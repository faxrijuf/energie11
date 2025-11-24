const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

export const sectionVariant = {
  hidden: { opacity: 0, y: isMobile ? 12 : 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: isMobile ? 0.06 : 0.08 },
  },
};

export const cardVariant = {
  hidden: { opacity: 0, y: isMobile ? 8 : 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};
