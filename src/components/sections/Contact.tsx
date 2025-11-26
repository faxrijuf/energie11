import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../i18n/LanguageContext';
import { Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { sectionVariant, cardVariant } from '../../utils/motionConfig';
import { glassPanel, glassInput } from '../../utils/glassStyles';
import { SectionContainer } from '../layout/SectionContainer';

interface FormData {
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    website: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.errorRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.errorRequired');
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('contact.form.errorEmail');
    }

    if (!formData.company.trim()) {
      newErrors.company = t('contact.form.errorRequired');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.errorRequired');
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    console.log('Form submission:', formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        message: ''
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative bg-transparent">
      <SectionContainer className="flex flex-col items-center py-16 md:py-20 lg:py-24">
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-xl"
        >
          <div className="mb-8 text-center">
            <SectionHeader
              title={t('contact.title')}
              description={t('contact.subtitle')}
            />
          </div>
          <motion.div variants={cardVariant} className={glassPanel}>
            <div className="p-6 md:p-8">
              {isSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="text-green-600 mx-auto mb-4" size={48} />
                  <p className="text-sm text-neutral-800">{t('contact.form.success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-[10px] md:text-[11px] font-medium tracking-[0.18em] uppercase text-neutral-600 mb-1.5">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      className={`w-full ${glassInput} px-3 md:px-3.5 py-2 md:py-2.5 text-[13px] md:text-sm text-neutral-900 placeholder:text-neutral-400 ${
                        errors.name ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] md:text-[11px] font-medium tracking-[0.18em] uppercase text-neutral-600 mb-1.5">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.form.emailPlaceholder')}
                      className={`w-full ${glassInput} px-3 md:px-3.5 py-2 md:py-2.5 text-[13px] md:text-sm text-neutral-900 placeholder:text-neutral-400 ${
                        errors.email ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-[10px] md:text-[11px] font-medium tracking-[0.18em] uppercase text-neutral-600 mb-1.5">
                      {t('contact.form.company')} *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t('contact.form.companyPlaceholder')}
                      className={`w-full ${glassInput} px-3 md:px-3.5 py-2 md:py-2.5 text-[13px] md:text-sm text-neutral-900 placeholder:text-neutral-400 ${
                        errors.company ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-[10px] md:text-[11px] font-medium tracking-[0.18em] uppercase text-neutral-600 mb-1.5">
                      {t('contact.form.website')}
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder={t('contact.form.websitePlaceholder')}
                      className={`w-full ${glassInput} px-3 md:px-3.5 py-2 md:py-2.5 text-[13px] md:text-sm text-neutral-900 placeholder:text-neutral-400`}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] md:text-[11px] font-medium tracking-[0.18em] uppercase text-neutral-600 mb-1.5">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows={5}
                      className={`w-full ${glassInput} px-3 md:px-3.5 py-2 md:py-2.5 text-[13px] md:text-sm text-neutral-900 placeholder:text-neutral-400 resize-none ${
                        errors.message ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center rounded-full bg-[#c62828] px-5 md:px-6 py-2.5 md:py-2.75 text-[13px] md:text-sm font-medium text-white shadow-[0_14px_30px_rgba(198,40,40,0.45)] transition-all duration-200 hover:bg-[#b71c1c] hover:shadow-[0_18px_42px_rgba(198,40,40,0.55)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div variants={cardVariant} className={`mt-8 ${glassPanel}`}>
            <div className="p-5 md:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs md:text-sm text-neutral-700">
                <a
                  href={`mailto:${t('contact.info.email')}`}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/30"
                >
                  <Mail size={16} />
                  <span className="font-medium">{t('contact.info.email')}</span>
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t('contact.info.location'))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/30"
                >
                  <MapPin size={16} />
                  <span className="font-medium">{t('contact.info.location')}</span>
                </a>
                <div className="flex items-center gap-3 rounded-xl px-3 py-2 text-neutral-700">
                  <CheckCircle2 size={16} className="text-green-600" />
                  <span className="font-medium">{t('contact.info.availability')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </SectionContainer>
    </section>
  );
};
