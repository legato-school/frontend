'use client';

import { motion } from 'framer-motion';
import { siteInfo } from '@/lib/data';
import Card from '@/components/ui/Card';
import { Calendar, Clock, Video, MapPin } from 'lucide-react';
import Script from 'next/script';

export default function BookPage() {
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
              Book Your <span className="bg-gradient-musical bg-clip-text text-transparent">Lesson</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed px-4">
              Schedule your piano or cello lesson at a time that works for you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-4 text-center h-full">
                <div className="inline-flex p-3 rounded-xl bg-primary-50 mb-3">
                  <Calendar className="w-5 h-5 text-primary-500" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Flexible Dates</h3>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-4 text-center h-full">
                <div className="inline-flex p-3 rounded-xl bg-secondary-50 mb-3">
                  <Clock className="w-5 h-5 text-secondary-500" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">60 Min Sessions</h3>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-4 text-center h-full">
                <div className="inline-flex p-3 rounded-xl bg-accent-50 mb-3">
                  <Video className="w-5 h-5 text-accent-500" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Online Available</h3>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-4 text-center h-full">
                <div className="inline-flex p-3 rounded-xl bg-green-50 mb-3">
                  <MapPin className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">In-Person</h3>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendly Widget */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Select a Date & Time
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Choose a slot that fits your schedule
              </p>
            </div>

            <Card className="overflow-hidden">
              {/* Calendly inline widget */}
              <div 
                className="calendly-inline-widget" 
                data-url={siteInfo.calendlyUrl}
                style={{ minWidth: '320px', height: '700px' }}
              />
              <Script 
                src="https://assets.calendly.com/assets/external/widget.js" 
                strategy="lazyOnload"
              />
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
