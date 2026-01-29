'use client';

import { motion } from 'framer-motion';
import { lessons } from '@/lib/data';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { Check, Piano, Music } from 'lucide-react';

export default function LessonsPage() {
  const pianoLessons = lessons.filter(l => l.instrument === 'piano');
  const celloLessons = lessons.filter(l => l.instrument === 'cello');

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
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Private <span className="bg-gradient-musical bg-clip-text text-transparent">Music Lessons</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed px-4">
              One-on-one instruction tailored to your goals, schedule, and learning style. 
              Available both in-person and online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Piano Lessons */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center space-x-3 mb-4">
              <Piano className="w-6 h-6 sm:w-8 sm:h-8 text-musical-piano" />
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">Piano Lessons</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Classical, jazz, and contemporary styles for all skill levels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {pianoLessons.map((lesson, index) => (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="bg-gradient-piano p-6 sm:p-8 text-white">
                    <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{lesson.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{lesson.name}</h3>
                    <p className="text-secondary-100 text-sm sm:text-base">{lesson.age}</p>
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {lesson.description}
                    </p>
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {lesson.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-musical-piano flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-gray-100">
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900">{lesson.price}</div>
                        <div className="text-xs sm:text-sm text-gray-500">{lesson.duration}</div>
                      </div>
                      <Link href="/book/">
                        <Button size="sm">Book Now</Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cello Lessons */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center space-x-3 mb-4">
              <Music className="w-6 h-6 sm:w-8 sm:h-8 text-musical-cello" />
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">Cello Lessons</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Classical technique, ensemble preparation, and solo repertoire
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {celloLessons.map((lesson, index) => (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="bg-gradient-cello p-6 sm:p-8 text-white">
                    <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{lesson.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{lesson.name}</h3>
                    <p className="text-accent-100 text-sm sm:text-base">{lesson.age}</p>
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {lesson.description}
                    </p>
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {lesson.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-musical-cello flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-gray-100">
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900">{lesson.price}</div>
                        <div className="text-xs sm:text-sm text-gray-500">{lesson.duration}</div>
                      </div>
                      <Link href="/book/">
                        <Button size="sm">Book Now</Button>
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
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Start Your Musical Journey?</h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 text-white/90">
              Book your first lesson today and discover the joy of making music
            </p>
            <Link href="/book/">
              <Button variant="secondary" size="lg">
                Schedule Your First Lesson
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
