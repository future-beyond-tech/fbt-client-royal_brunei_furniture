'use client'

import { Clock, Mail, MapPin, Phone, ReceiptText } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { EnquiryForm } from '@/components/ui/EnquiryForm'
import { BUSINESS_INFO } from '@/lib/constants'

export function Contact() {
  return (
    <section id="contact" className="bg-[var(--cream)]">
      <div className="grid md:grid-cols-2">
        <AnimatedSection
          direction="left"
          className="flex flex-col gap-10 px-6 py-20 md:px-14 md:py-28"
        >
          <div>
            <p className="mb-4 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--amber)]">
              <span className="h-px w-10 bg-[var(--amber)]" />
              Visit the Showroom
            </p>
            <h2 className="font-display text-5xl leading-[1.05] text-[var(--walnut)] md:text-6xl">
              Come say <span className="italic">hello.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--muted)]">
              Walk-ins are welcome seven days a week. Bring your room
              measurements and we&apos;ll help you plan a setup that fits.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--amber)]" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  Address
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--walnut)]">
                  {BUSINESS_INFO.addressLine1}
                  <br />
                  {BUSINESS_INFO.addressLine2}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-[var(--amber)]" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  Call / WhatsApp
                </p>
                <p className="mt-1 text-sm text-[var(--walnut)]">
                  {BUSINESS_INFO.phone}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-[var(--amber)]" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  Email
                </p>
                <p className="mt-1 break-all text-sm text-[var(--walnut)]">
                  {BUSINESS_INFO.email}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <ReceiptText className="mt-1 h-5 w-5 shrink-0 text-[var(--amber)]" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  GSTIN
                </p>
                <p className="mt-1 font-mono text-sm text-[var(--walnut)]">
                  {BUSINESS_INFO.gstin}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Clock className="h-5 w-5 text-[var(--amber)]" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                Opening Hours
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-[var(--walnut)]">
              {BUSINESS_INFO.hours.map((h) => (
                <div key={h.days} className="contents">
                  <span className="font-medium">{h.days}</span>
                  <span className="text-[var(--muted)]">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
            <iframe
              title="Royal Brunei Furniture location on Google Maps"
              src={BUSINESS_INFO.mapsEmbedUrl}
              loading="lazy"
              className="h-64 w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection
          direction="right"
          className="bg-[var(--walnut)] px-6 py-20 md:px-14 md:py-28"
        >
          <p className="mb-4 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
            <span className="h-px w-10 bg-[var(--gold)]" />
            Send an Enquiry
          </p>
          <h3 className="mb-10 font-display text-4xl leading-[1.05] text-[var(--cream)] md:text-5xl">
            Tell us what you need.
          </h3>
          <EnquiryForm />
        </AnimatedSection>
      </div>
    </section>
  )
}
