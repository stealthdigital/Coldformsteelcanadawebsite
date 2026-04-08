import { CheckCircle2, ArrowRight, BookOpen, Home, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { HeadMeta } from '../HeadMeta';
import { motion } from 'motion/react';

interface ThankYouProps {
  onNavigate: (page: string) => void;
}

const NEXT_STEPS = [
  {
    icon: BookOpen,
    title: 'Explore the Learning Centre',
    description: 'Understand the build process, permits, financing, and what makes cold-form steel the smart choice.',
    action: 'learning',
    label: 'Visit Learning Centre',
  },
  {
    icon: Home,
    title: 'Browse Our Models',
    description: 'From the compact Piccolo ADU to full custom barndominiums — find the build that fits your vision.',
    action: 'models',
    label: 'See Models & Pricing',
  },
  {
    icon: Phone,
    title: 'Call Us Directly',
    description: 'Prefer to talk? Our building specialists are available Monday–Friday, 8 AM – 6 PM.',
    action: null,
    label: '+1 (905) 642-1012',
    href: 'tel:+19056421012',
  },
];

export function ThankYou({ onNavigate }: ThankYouProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <HeadMeta
        title="Thank You | Cold Form Steel Canada"
        description="Thank you for contacting Cold Form Steel Canada. Your quote request has been received and a building specialist will be in touch within 24 hours."
        robots="noindex, nofollow"
      />

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">

          {/* Animated checkmark */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              {/* Outer ring pulse */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.4, opacity: 0 }}
                transition={{ duration: 1.2, delay: 0.4, repeat: Infinity, repeatDelay: 1.5 }}
                className="absolute inset-0 rounded-full bg-terracotta/20"
              />
              <div className="w-28 h-28 rounded-full bg-terracotta/10 flex items-center justify-center">
                <CheckCircle2 className="w-14 h-14 text-terracotta" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-terracotta font-bold text-sm uppercase tracking-widest mb-4">
              Request Received
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Thank You!
            </h1>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-xl mx-auto mb-4">
              Your quote request has been submitted successfully. One of our building specialists will be in touch within <span className="text-foreground font-bold">24 hours</span>.
            </p>
            <p className="text-base text-muted-foreground mb-12">
              A confirmation email is on its way to your inbox.
            </p>

            <Button
              onClick={() => onNavigate('home')}
              className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-10 rounded-xl border-0 shadow-lg inline-flex items-center gap-2 transition-all hover:scale-105"
            >
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-4 w-full">
        <div className="border-t border-muted" />
      </div>

      {/* What's Next */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-3">While You Wait…</h2>
            <p className="text-muted-foreground font-medium">
              Here are a few ways to get to know SteelBuilt better.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {NEXT_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.6 + i * 0.1 }}
                >
                  <Card className="p-8 border-0 shadow-md bg-white rounded-2xl h-full flex flex-col hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center mb-5 flex-shrink-0">
                      <Icon className="w-6 h-6 text-terracotta" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed flex-1 mb-6">
                      {step.description}
                    </p>
                    {step.action ? (
                      <button
                        onClick={() => onNavigate(step.action!)}
                        className="inline-flex items-center gap-2 text-sm font-bold text-terracotta hover:text-primary transition-colors group"
                      >
                        {step.label}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    ) : (
                      <a
                        href={step.href}
                        className="inline-flex items-center gap-2 text-sm font-bold text-terracotta hover:text-primary transition-colors group"
                      >
                        {step.label}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="bg-primary text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/70 text-sm uppercase tracking-widest font-bold mb-3">Cold Form Steel Canada</p>
          <h2 className="text-3xl font-bold mb-4">
            Precision-built. Canadian-made. Ready when you are.
          </h2>
          <p className="text-white/80 font-medium leading-relaxed">
            We build barndominiums, ADUs, and custom steel structures across Ontario, Quebec, and PEI — engineered to last a lifetime.
          </p>
        </div>
      </section>
    </div>
  );
}