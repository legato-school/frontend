'use client';

import { useState, FormEvent, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Loader2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import toast from 'react-hot-toast';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_jqr7cjx';
const EMAILJS_TEMPLATE_ID = 'template_714ywfc';
const EMAILJS_PUBLIC_KEY = 'ciA2u4kGzTYUgsQfg';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS Result:', result);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      formRef.current.reset();
    } catch (error: unknown) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try WhatsApp instead.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) {
    return <div className="h-64 animate-pulse bg-gray-100 rounded-xl" />;
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div>
        <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name *
        </label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm sm:text-base"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm sm:text-base"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none text-sm sm:text-base"
          placeholder="Tell us about your musical goals or any questions you have..."
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
