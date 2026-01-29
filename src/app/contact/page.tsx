'use client';

import { motion } from 'framer-motion';
import { siteInfo } from '@/lib/data';
import Card from '@/components/ui/Card';
import ContactForm from '@/components/sections/ContactForm';
import { Mail, MessageCircle, Instagram, Youtube, MapPin } from 'lucide-react';

export default function ContactPage() {
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
              Get In <span className="bg-gradient-musical bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed px-4">
              Have questions? Send us a message and we&apos;ll get back to you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
            <motion.button
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="block w-full text-left"
            >
              <Card hover className="p-4 sm:p-6 text-center h-full cursor-pointer">
                <div className="inline-flex p-3 sm:p-4 rounded-2xl bg-primary-50 mb-3 sm:mb-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                <span className="text-primary-600 text-sm break-all">
                  {siteInfo.email}
                </span>
              </Card>
            </motion.button>

            <motion.a
              href={siteInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="block"
            >
              <Card hover className="p-4 sm:p-6 text-center h-full cursor-pointer">
                <div className="inline-flex p-3 sm:p-4 rounded-2xl bg-green-50 mb-3 sm:mb-4">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
                <span className="text-green-600 text-sm">
                  {siteInfo.countryCode} {siteInfo.phone}
                </span>
              </Card>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Send Us a Message
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Fill out the form below and we&apos;ll get back to you as soon as possible
              </p>
            </div>

            <Card className="p-6 sm:p-8">
              <ContactForm />
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Social Media & Location */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Connect With Us
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Follow our journey and stay updated with the latest news
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <motion.a
                href={siteInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="block"
              >
                <Card hover className="p-6 sm:p-8 text-center h-full cursor-pointer">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                    <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Instagram</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Follow us for daily inspiration and student performances
                  </p>
                </Card>
              </motion.a>

              <motion.a
                href={siteInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="block"
              >
                <Card hover className="p-6 sm:p-8 text-center h-full cursor-pointer">
                  <div className="inline-flex p-4 rounded-2xl bg-red-500 mb-4">
                    <Youtube className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">YouTube</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Watch performances and tutorials
                  </p>
                </Card>
              </motion.a>
            </div>

            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 sm:mt-8"
            >
              <Card className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex p-3 rounded-xl bg-primary-50">
                      <MapPin className="w-6 h-6 text-primary-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      We offer both in-person lessons at our studio in Lebanon and online lessons 
                      for students worldwide. Contact us for specific location details.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
