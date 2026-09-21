import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, CheckCircle, Send } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/Reveal'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type FormData = z.infer<typeof schema>

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@forgefitness.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    document.title = 'Contact — FORGE'
  }, [])

  const onSubmit = (_data: FormData) => {
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 6000)
  }

  const inputClass = (hasError: boolean) =>
    `w-full rounded-lg border bg-charcoal px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:ring-1 ${
      hasError
        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
        : 'border-white/10 focus:border-lime/50 focus:ring-lime/30'
    }`

  return (
    <main className="min-h-screen bg-ink">
      <Navbar />

      <PageHeader
        eyebrow="Contact"
        title="Get in touch."
        subtitle="Questions, feedback, or just want to say hi? Drop us a message and we'll get back to you within 24 hours."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
            {/* Contact info */}
            <div className="space-y-4">
              <Reveal>
                <h2 className="text-2xl font-black text-white md:text-3xl">Contact info</h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-sm text-white/50">
                  Reach out through any of these channels. We're here to help.
                </p>
              </Reveal>

              <div className="space-y-4 pt-4">
                {contactInfo.map((c, i) => (
                  <Reveal key={c.label} delay={200 + i * 100}>
                    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-charcoal p-5 transition-all duration-300 hover:border-lime/30">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-lime/10 text-lime">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-white/40">{c.label}</div>
                        <div className="mt-1 text-sm font-medium text-white">{c.value}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Form */}
            <Reveal delay={150}>
              <div className="rounded-2xl border border-white/10 bg-charcoal p-6 md:p-8">
                {submitted && (
                  <div className="mb-6 flex items-center gap-3 rounded-lg border border-lime/30 bg-lime/10 px-4 py-4 animate-fade-in">
                    <CheckCircle className="h-5 w-5 shrink-0 text-lime" />
                    <p className="text-sm font-bold text-lime">
                      Message sent! We'll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
                      Name
                    </label>
                    <input
                      {...register('name')}
                      placeholder="John Doe"
                      className={inputClass(!!errors.name)}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs font-medium text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
                      Email
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="john@example.com"
                      className={inputClass(!!errors.email)}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-red-400">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
                      Subject
                    </label>
                    <input
                      {...register('subject')}
                      placeholder="How can we help?"
                      className={inputClass(!!errors.subject)}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs font-medium text-red-400">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
                      Message
                    </label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Tell us what's on your mind... (minimum 20 characters)"
                      className={`${inputClass(!!errors.message)} resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs font-medium text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-lime py-3.5 text-sm font-bold text-ink transition-all duration-200 hover:bg-lime-dark hover:shadow-glow active:scale-95 disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
