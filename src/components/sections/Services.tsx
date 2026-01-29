import Link from 'next/link'
import { SERVICES } from '@/lib/constants'

export function Services() {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 shadow-soft">
            <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
            </svg>
            <span className="text-sm font-semibold text-gray-700">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Specialized Cloud
            <span className="block gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Expert AWS architecture and comprehensive security services tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* AWS Architecture Card */}
          <Link 
            href="/services/aws-architecture/"
            className="group relative card-3d"
          >
            <div className="relative h-full glass rounded-3xl p-10 border-2 border-white/50 hover:border-purple-200 transition-all duration-500 overflow-hidden">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
              
              {/* Floating Orb */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                {/* Icon with Glow */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {SERVICES.aws.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {SERVICES.aws.description}
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {[
                    { icon: '⚙️', text: 'Operational Excellence' },
                    { icon: '🔒', text: 'Security & Reliability' },
                    { icon: '⚡', text: 'Performance Optimization' },
                    { icon: '💰', text: 'Cost Efficiency' }
                  ].map((feature) => (
                    <div key={feature.text} className="flex items-center gap-3 group/item">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <span className="text-lg">{feature.icon}</span>
                      </div>
                      <span className="text-gray-700 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3 text-purple-600 font-bold group-hover:gap-4 transition-all">
                  <span className="text-lg">Explore Service</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-8 right-8 glass rounded-xl px-4 py-2 shadow-lg border border-white/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-gray-900">6 Pillars</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Security Services Card */}
          <Link 
            href="/services/security/"
            className="group relative card-3d"
          >
            <div className="relative h-full glass rounded-3xl p-10 border-2 border-white/50 hover:border-blue-200 transition-all duration-500 overflow-hidden">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
              
              {/* Floating Orb */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                {/* Icon with Glow */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {SERVICES.security.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {SERVICES.security.description}
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {[
                    { icon: '🏢', text: 'Infrastructure Security' },
                    { icon: '☁️', text: 'Cloud Security Audits' },
                    { icon: '🎯', text: 'Penetration Testing' },
                    { icon: '🔄', text: 'CI/CD Security' }
                  ].map((feature) => (
                    <div key={feature.text} className="flex items-center gap-3 group/item">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <span className="text-lg">{feature.icon}</span>
                      </div>
                      <span className="text-gray-700 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3 text-blue-600 font-bold group-hover:gap-4 transition-all">
                  <span className="text-lg">Explore Service</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-8 right-8 glass rounded-xl px-4 py-2 shadow-lg border border-white/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-gray-900">24/7</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Not sure which service fits your needs?
          </p>
          <Link 
            href="/contact/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-glow-lg transition-all duration-300 font-semibold"
          >
            <span>Talk to an Expert</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
