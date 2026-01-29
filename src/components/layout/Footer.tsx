import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Youtube, Mail, MessageCircle } from 'lucide-react';
import { siteInfo } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand - just the logo */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/logo333.svg"
                alt="Legato School"
                width={120}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400">
              Personalized piano and cello lessons for all ages and skill levels.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/lessons/" className="text-sm hover:text-primary-400 transition-colors">
                  Lessons
                </Link>
              </li>
              <li>
                <Link href="/programs/" className="text-sm hover:text-primary-400 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/about/" className="text-sm hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <span className="text-musical-piano">🎹</span>
                <span>Piano Lessons</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-musical-cello">🎻</span>
                <span>Cello Lessons</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>💻</span>
                <span>Online Sessions</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>👥</span>
                <span>In-Person Sessions</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="flex items-center space-x-2 text-sm hover:text-primary-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{siteInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {siteInfo.countryCode} {siteInfo.phone}</span>
                </a>
              </li>
              <li className="flex space-x-3 pt-2">
                <a
                  href={siteInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={siteInfo.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} {siteInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
