'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Piano, Music, Video, Users } from 'lucide-react';
import Card from '@/components/ui/Card';

const services = [
  {
    icon: Piano,
    title: 'Piano Lessons',
    description: 'Classical, jazz, and contemporary styles for all skill levels',
    color: 'text-musical-piano',
    bgColor: 'bg-secondary-50',
    href: '/lessons/',
  },
  {
    icon: Music,
    title: 'Cello Lessons',
    description: 'Classical technique, ensemble preparation, and solo repertoire',
    color: 'text-musical-cello',
    bgColor: 'bg-accent-50',
    href: '/lessons/',
  },
  {
    icon: Video,
    title: 'Online Sessions',
    description: 'Interactive virtual lessons from the comfort of your home',
    color: 'text-primary-500',
    bgColor: 'bg-primary-50',
    href: '/lessons/',
  },
  {
    icon: Users,
    title: 'Training Programs',
    description: 'Structured 8-week programs for different age groups',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    href: '/programs/',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-musical bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive music education tailored to your goals and schedule
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <Card hover className="h-full p-8 text-center group cursor-pointer">
                  <div className={`inline-flex p-4 rounded-2xl ${service.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
