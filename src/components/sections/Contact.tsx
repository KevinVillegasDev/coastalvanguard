"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, CheckCircle, AlertCircle, Anchor } from "lucide-react";
import { Input, Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useContactForm } from "@/hooks/useContactForm";

export default function Contact() {
  const { form, isSubmitting, submitStatus, onSubmit, resetStatus } =
    useContactForm();

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      {/* Compass decoration */}
      <div className="absolute top-20 right-20 opacity-5">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          className="text-white"
        >
          <circle
            cx="100"
            cy="100"
            r="95"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="100"
            cy="100"
            r="70"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <line
            x1="100"
            y1="5"
            x2="100"
            y2="30"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="100"
            y1="170"
            x2="100"
            y2="195"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="5"
            y1="100"
            x2="30"
            y2="100"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="170"
            y1="100"
            x2="195"
            y2="100"
            stroke="currentColor"
            strokeWidth="2"
          />
          <polygon
            points="100,20 105,50 100,45 95,50"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/30" />
            <span className="text-mist font-medium tracking-[0.2em] uppercase text-xs">
              Start Your Journey
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/30" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            Chart Your Course{" "}
            <span className="text-white">With Us</span>
          </h2>
          <p className="text-fog/60 text-lg max-w-2xl mx-auto">
            Ready to transform your marketing? Drop us a line and we'll navigate
            the path to your success together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Email Card */}
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-fog/50 uppercase tracking-wider mb-1">
                    Email Us
                  </div>
                  <a
                    href="mailto:hello@coastalvanguard.com"
                    className="text-fog hover:text-white transition-colors duration-300 font-medium"
                  >
                    hello@coastalvanguard.com
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Anchor className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-fog/50 uppercase tracking-wider mb-1">
                    Response Time
                  </div>
                  <p className="text-fog font-medium">Within 24 hours</p>
                  <p className="text-fog/50 text-sm mt-1">
                    We value your time and respond promptly.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative quote */}
            <div className="pt-4">
              <blockquote className="border-l-2 border-white/20 pl-4">
                <p className="text-fog/40 italic text-sm leading-relaxed">
                  "The best time to plant a tree was 20 years ago. The second
                  best time is now."
                </p>
                <footer className="text-fog/30 text-xs mt-2">
                  — Chinese Proverb
                </footer>
              </blockquote>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-6 sm:p-8 glow-border">
              <AnimatePresence mode="wait">
                {submitStatus === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold mb-3">
                      Message Received!
                    </h3>
                    <p className="text-fog/60 mb-8 max-w-sm mx-auto">
                      Thank you for reaching out. We'll chart a course back to
                      you within 24 hours.
                    </p>
                    <Button variant="secondary" onClick={resetStatus}>
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={onSubmit}
                    className="space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Input
                        {...register("name")}
                        id="name"
                        label="Name"
                        placeholder="Your name"
                        error={errors.name?.message}
                      />
                      <Input
                        {...register("email")}
                        id="email"
                        type="email"
                        label="Email"
                        placeholder="you@company.com"
                        error={errors.email?.message}
                      />
                    </div>

                    <Input
                      {...register("company")}
                      id="company"
                      label="Company (Optional)"
                      placeholder="Your company name"
                    />

                    <Textarea
                      {...register("message")}
                      id="message"
                      label="Message"
                      placeholder="Tell us about your project and goals..."
                      rows={5}
                      error={errors.message?.message}
                    />

                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 px-4 py-3 rounded-lg"
                      >
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        Something went wrong. Please try again.
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      className="w-full"
                      isLoading={isSubmitting}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
