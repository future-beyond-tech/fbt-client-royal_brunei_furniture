'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BUSINESS_INFO, CATEGORIES } from '@/lib/constants'
import { EnquirySchema, type EnquiryFormData } from '@/lib/schema'

type SubmitState = 'idle' | 'loading' | 'success'

export function EnquiryForm() {
  const [state, setState] = useState<SubmitState>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(EnquirySchema),
    defaultValues: { name: '', phone: '', category: undefined, message: '' },
  })

  const onSubmit = handleSubmit(async (data) => {
    setState('loading')
    await new Promise((r) => setTimeout(r, 700))
    const msg = encodeURIComponent(
      `Hi ${BUSINESS_INFO.name}!\n\nName: ${data.name}\nPhone: ${data.phone}\nInterested in: ${data.category}\n${data.message ? `Message: ${data.message}` : ''}`,
    )
    const waUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${msg}`
    setState('success')
    window.open(waUrl, '_blank', 'noopener,noreferrer')
    setTimeout(() => {
      setState('idle')
      reset()
    }, 5000)
  })

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {state === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-start gap-4 rounded-2xl border border-[var(--gold)]/30 bg-[var(--espresso)]/80 p-8 text-[var(--cream)]"
          >
            <CheckCircle2 className="h-10 w-10 text-[var(--gold)]" />
            <h3 className="font-display text-3xl">Enquiry sent</h3>
            <p className="text-sm text-[var(--cream)]/80">
              We&apos;ve opened WhatsApp so you can send the message directly. Our
              team usually responds within an hour during business hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs uppercase tracking-[0.2em] text-[var(--cream)]/70"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                {...register('name')}
                className="w-full border-b border-[var(--gold)]/30 bg-transparent py-3 text-[var(--cream)] placeholder-[var(--cream)]/30 outline-none transition-colors focus:border-[var(--gold)]"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-2 text-xs text-[var(--gold)]">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-xs uppercase tracking-[0.2em] text-[var(--cream)]/70"
              >
                Mobile Number
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                {...register('phone')}
                className="w-full border-b border-[var(--gold)]/30 bg-transparent py-3 text-[var(--cream)] placeholder-[var(--cream)]/30 outline-none transition-colors focus:border-[var(--gold)]"
                placeholder="10-digit mobile"
              />
              {errors.phone && (
                <p className="mt-2 text-xs text-[var(--gold)]">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="category"
                className="mb-2 block text-xs uppercase tracking-[0.2em] text-[var(--cream)]/70"
              >
                Interested In
              </label>
              <select
                id="category"
                defaultValue=""
                {...register('category')}
                className="w-full border-b border-[var(--gold)]/30 bg-transparent py-3 text-[var(--cream)] outline-none transition-colors focus:border-[var(--gold)]"
              >
                <option value="" disabled className="bg-[var(--walnut)]">
                  Select a category
                </option>
                {CATEGORIES.map((c) => (
                  <option
                    key={c.id}
                    value={c.name}
                    className="bg-[var(--walnut)]"
                  >
                    {c.name}
                  </option>
                ))}
                <option value="Other" className="bg-[var(--walnut)]">
                  Other
                </option>
              </select>
              {errors.category && (
                <p className="mt-2 text-xs text-[var(--gold)]">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs uppercase tracking-[0.2em] text-[var(--cream)]/70"
              >
                Message (optional)
              </label>
              <textarea
                id="message"
                rows={3}
                {...register('message')}
                className="w-full resize-none border-b border-[var(--gold)]/30 bg-transparent py-3 text-[var(--cream)] placeholder-[var(--cream)]/30 outline-none transition-colors focus:border-[var(--gold)]"
                placeholder="Tell us what you are looking for"
              />
              {errors.message && (
                <p className="mt-2 text-xs text-[var(--gold)]">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={state === 'loading'}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--walnut)] transition-transform hover:-translate-y-0.5 disabled:opacity-70"
            >
              {state === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending
                </>
              ) : (
                <>
                  Send Enquiry <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
