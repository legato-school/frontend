'use client';

import { motion } from 'framer-motion';
import { education, experience } from '@/lib/data';
import Card from '@/components/ui/Card';
import { GraduationCap, Briefcase, Award, Heart } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Meet <span className="bg-gradient-musical bg-clip-text text-transparent">Rim Farhat</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Passionate music educator dedicated to unlocking the musical potential in every student
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-12 text-center bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="text-6xl mb-6">🎹</div>
              <blockquote className="text-2xl sm:text-3xl font-serif text-gray-800 leading-relaxed mb-6">
                "Every key on the piano unlocks a world of possibilities, where creativity and passion 
                harmonize into melodies that resonate with the soul."
              </blockquote>
              <div className="space-y-1">
                <div className="text-xl font-bold text-gray-900">Rim Farhat</div>
                <div className="text-gray-600">Founder & Music Teacher at Legato School</div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Teaching Philosophy</h2>
              <p className="text-lg text-gray-600">
                Creating a supportive environment where students thrive
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Heart,
                  title: 'Student-Centered',
                  description: 'Every lesson is tailored to the individual needs, goals, and learning style of each student.',
                  color: 'text-red-500',
                  bg: 'bg-red-50',
                },
                {
                  icon: Award,
                  title: 'Excellence in Technique',
                  description: 'Building strong technical foundations while fostering musical expression and creativity.',
                  color: 'text-yellow-500',
                  bg: 'bg-yellow-50',
                },
                {
                  icon: GraduationCap,
                  title: 'Comprehensive Education',
                  description: 'Integrating music theory, harmony, and history into practical instruction for well-rounded musicians.',
                  color: 'text-blue-500',
                  bg: 'bg-blue-50',
                },
                {
                  icon: Briefcase,
                  title: 'Performance Ready',
                  description: 'Preparing students for recitals, competitions, and auditions with confidence and poise.',
                  color: 'text-green-500',
                  bg: 'bg-green-50',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover className="p-8 h-full">
                    <div className={`inline-flex p-4 rounded-2xl ${item.bg} mb-4`}>
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-3 mb-4">
              <GraduationCap className="w-8 h-8 text-primary-500" />
              <h2 className="text-4xl font-bold text-gray-900">Education</h2>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                    <div className="flex-shrink-0 mb-4 md:mb-0">
                      <div className="bg-gradient-musical text-white px-4 py-2 rounded-lg text-sm font-medium">
                        {edu.time}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.title}</h3>
                      <p className="text-primary-600 font-medium mb-3">{edu.organization}</p>
                      <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-3 mb-4">
              <Briefcase className="w-8 h-8 text-primary-500" />
              <h2 className="text-4xl font-bold text-gray-900">Experience</h2>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                    <div className="flex-shrink-0 mb-4 md:mb-0">
                      <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center">
                        <span className="text-3xl">🎵</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{exp.position}</h3>
                          <p className="text-primary-600 font-medium">{exp.company}</p>
                        </div>
                        <div className="bg-gradient-musical text-white px-4 py-2 rounded-lg text-sm font-medium mt-2 sm:mt-0 inline-block">
                          {exp.time}
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
