'use client';

import { motion } from 'framer-motion';
import { programs } from '@/lib/data';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { Check, Calendar } from 'lucide-react';

export default function ProgramsPage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-soft mb-4 sm:mb-6">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                8-Week Structured Programs
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Piano <span className="bg-gradient-musical bg-clip-text text-transparent">Programs</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed px-4">
              Structured learning paths designed for different age groups and skill levels. 
              Perfect for beginners starting their musical journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full flex flex-col">
                  <div className="bg-gradient-piano p-4 sm:p-6 text-white text-center">
                    <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">{program.icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1">{program.name}</h3>
                    <p className="text-secondary-100 text-xs sm:text-sm">{program.age}</p>
                  </div>
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 flex-1">
                      {program.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-musical-piano flex-shrink-0 mt-0.5" />
                          <span className="text-[10px] sm:text-xs text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-3 sm:pt-4 border-t border-gray-100">
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{program.price}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500 mb-3 sm:mb-4">{program.duration}</div>
                      <Link href="/contact/" className="block">
                        <Button size="sm" className="w-full">Enroll Now</Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-musical text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Start Your 8-Week Journey</h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 text-white/90">
              Join our structured programs and see real progress in just 8 weeks
            </p>
            <Link href="/contact/">
              <Button variant="secondary" size="lg">
                Enroll in a Program
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
