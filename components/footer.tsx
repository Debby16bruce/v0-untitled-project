import Link from "next/link"
import { BookOpen, Mail, Instagram, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-purple-900 text-purple-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8" />
              <span className="font-bold text-xl text-white">Purple Pages</span>
            </div>
            <p className="text-purple-200 mb-4">
              A community for book lovers to share, discover, and discuss their favorite reads.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-200 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/books" className="text-purple-200 hover:text-white">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/discussions" className="text-purple-200 hover:text-white">
                  Discussions
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="text-purple-200 hover:text-white">
                  Book Clubs
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-purple-200 hover:text-white">
                  Reading Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-bold text-white mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/login" className="text-purple-200 hover:text-white">
                  Log In
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-purple-200 hover:text-white">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-purple-200 hover:text-white">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/settings" className="text-purple-200 hover:text-white">
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-purple-200 hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-purple-200 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-purple-200 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-purple-200 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-12 pt-8 text-center text-purple-300">
          <p>&copy; {new Date().getFullYear()} Purple Pages. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
