"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, BookOpen } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-purple-700" />
            <span className="font-bold text-xl text-purple-900">Purple Pages</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/books" className="text-purple-700 hover:text-purple-900">
              Books
            </Link>
            <Link href="/discussions" className="text-purple-700 hover:text-purple-900">
              Discussions
            </Link>
            <Link href="/clubs" className="text-purple-700 hover:text-purple-900">
              Book Clubs
            </Link>
            <Link href="/about" className="text-purple-700 hover:text-purple-900">
              About
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
              Log In
            </Button>
            <Button className="bg-purple-700 hover:bg-purple-800 text-white">Sign Up</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-purple-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/books"
              className="block py-2 text-purple-700 hover:text-purple-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Books
            </Link>
            <Link
              href="/discussions"
              className="block py-2 text-purple-700 hover:text-purple-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Discussions
            </Link>
            <Link
              href="/clubs"
              className="block py-2 text-purple-700 hover:text-purple-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Clubs
            </Link>
            <Link
              href="/about"
              className="block py-2 text-purple-700 hover:text-purple-900"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 w-full">
                Log In
              </Button>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white w-full">Sign Up</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
