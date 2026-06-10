import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { HeroBackground } from '@/components/landing/hero-background'
import { FloatingShapes } from '@/components/landing/floating-shapes'
import { FeatureCard } from '@/components/landing/feature-card'
import { AnimatedCounter } from '@/components/landing/animated-counter'
import { AnimatedButton } from '@/components/landing/animated-button'
import { ScrollReveal } from '@/components/landing/scroll-reveal'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <HeroBackground />
        <FloatingShapes />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Find Your Dream Job with{' '}
                <span className="text-secondary-300">AI-Powered</span>{' '}
                Matching
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="mt-6 text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto">
                The smartest job marketplace in Bangladesh. Our AI matches your
                skills, experience, and preferences with the perfect opportunities.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <AnimatedButton className="w-full sm:w-auto">
                  <Link
                    href="/register"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-white text-primary-700 font-semibold text-base hover:bg-gray-50 transition-colors shadow-lg"
                  >
                    Get Started Free
                  </Link>
                </AnimatedButton>
                <AnimatedButton className="w-full sm:w-auto">
                  <Link
                    href="/login"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-colors"
                  >
                    Sign In
                  </Link>
                </AnimatedButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Why Choose SkillBridge BD?
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Powered by intelligent algorithms that understand your career goals
                and find the best matches.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <FeatureCard index={0}>
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Matching</h3>
              <p className="text-gray-600 text-sm">
                Our AI analyzes your skills, experience, and preferences to find jobs
                that truly fit your profile.
              </p>
            </FeatureCard>

            {/* Feature 2 */}
            <FeatureCard index={1}>
              <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Applications</h3>
              <p className="text-gray-600 text-sm">
                Apply to jobs with one click. Track application status and get
                real-time updates on your progress.
              </p>
            </FeatureCard>

            {/* Feature 3 */}
            <FeatureCard index={2}>
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Employer Dashboard</h3>
              <p className="text-gray-600 text-sm">
                Manage job postings, review applications, and find the best
                candidates with AI-powered scoring.
              </p>
            </FeatureCard>

            {/* Feature 4 */}
            <FeatureCard index={3}>
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct Messaging</h3>
              <p className="text-gray-600 text-sm">
                Connect directly with employers after getting accepted. Discuss
                opportunities and next steps seamlessly.
              </p>
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <AnimatedCounter value="10K+" label="Active Jobs" />
              <AnimatedCounter value="50K+" label="Job Seekers" />
              <AnimatedCounter value="2K+" label="Companies" />
              <AnimatedCounter value="95%" label="Match Accuracy" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands of professionals and companies already using SkillBridge BD
              to connect and grow.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <AnimatedButton className="w-full sm:w-auto">
                <Link
                  href="/register"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary-600 text-white font-semibold text-base hover:bg-primary-700 transition-colors shadow-sm"
                >
                  Create Free Account
                </Link>
              </AnimatedButton>
              <AnimatedButton className="w-full sm:w-auto">
                <Link
                  href="/login"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-gray-300 text-gray-700 font-semibold text-base hover:bg-gray-50 transition-colors"
                >
                  Sign In
                </Link>
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">SkillBridge</span>
              <span className="text-xl font-bold text-secondary-400">BD</span>
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} SkillBridge BD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
