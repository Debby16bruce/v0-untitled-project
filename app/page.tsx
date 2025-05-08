import Link from "next/link"
import { BookCard } from "@/components/book-card"
import { DiscussionPreview } from "@/components/discussion-preview"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function Home() {
  // Mock data for featured books
  const featuredBooks = [
    {
      id: "1",
      title: "The Midnight Library",
      author: "Matt Haig",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.2,
    },
    {
      id: "2",
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.1,
    },
    {
      id: "3",
      title: "Project Hail Mary",
      author: "Andy Weir",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.5,
    },
  ]

  // Mock data for recent discussions
  const recentDiscussions = [
    {
      id: "1",
      title: "Character development in The Midnight Library",
      bookTitle: "The Midnight Library",
      author: "BookLover42",
      commentCount: 24,
      createdAt: "2 days ago",
    },
    {
      id: "2",
      title: "Themes of consciousness in Klara and the Sun",
      bookTitle: "Klara and the Sun",
      author: "LiteraryExplorer",
      commentCount: 18,
      createdAt: "5 days ago",
    },
  ]

  return (
    <main className="min-h-screen bg-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Purple Pages</h1>
          <p className="text-xl md:text-2xl mb-8">
            A community for book lovers to share, discover, and discuss their favorite reads
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-purple-800 hover:bg-purple-100">Join Now</Button>
            <Button variant="outline" className="border-white text-white hover:bg-purple-700">
              Explore Books
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-purple-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-purple-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              placeholder="Search for books, authors, or discussions..."
            />
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-purple-900">Featured Books</h2>
            <Link href="/books" className="text-purple-700 hover:text-purple-900 font-medium">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-purple-900">Recent Discussions</h2>
            <Link href="/discussions" className="text-purple-700 hover:text-purple-900 font-medium">
              View All
            </Link>
          </div>
          <div className="space-y-6">
            {recentDiscussions.map((discussion) => (
              <DiscussionPreview key={discussion.id} discussion={discussion} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="py-16 bg-purple-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">Join Our Reading Community</h2>
          <p className="text-lg text-purple-800 mb-8 max-w-2xl mx-auto">
            Connect with fellow book lovers, track your reading journey, and participate in thoughtful discussions about
            your favorite books.
          </p>
          <Button className="bg-purple-700 hover:bg-purple-800 text-white">Sign Up Now</Button>
        </div>
      </section>
    </main>
  )
}
