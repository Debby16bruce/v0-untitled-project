import { BookCard } from "@/components/book-card"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"

export default function BooksPage() {
  // Mock data for books
  const books = [
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
    {
      id: "4",
      title: "The Song of Achilles",
      author: "Madeline Miller",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.3,
    },
    {
      id: "5",
      title: "Circe",
      author: "Madeline Miller",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.2,
    },
    {
      id: "6",
      title: "The Invisible Life of Addie LaRue",
      author: "V.E. Schwab",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.0,
    },
    {
      id: "7",
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.4,
    },
    {
      id: "8",
      title: "A Little Life",
      author: "Hanya Yanagihara",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 4.3,
    },
    {
      id: "9",
      title: "Normal People",
      author: "Sally Rooney",
      coverImage: "/placeholder.svg?height=300&width=200",
      rating: 3.9,
    },
  ]

  // Mock genres for filter
  const genres = [
    "Fiction",
    "Science Fiction",
    "Fantasy",
    "Mystery",
    "Romance",
    "Thriller",
    "Historical Fiction",
    "Biography",
    "Self-Help",
  ]

  return (
    <main className="min-h-screen bg-purple-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-purple-900 mb-8">Explore Books</h1>

        {/* Search and Filter Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-purple-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-purple-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                placeholder="Search for books by title, author, or ISBN..."
              />
            </div>
            <div>
              <Button
                variant="outline"
                className="w-full md:w-auto border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Genre Filter Pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {genres.map((genre) => (
              <button
                key={genre}
                className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200 transition-colors"
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <Button variant="outline" className="border-purple-300 text-purple-700" disabled>
              Previous
            </Button>
            <Button variant="outline" className="border-purple-300 bg-purple-100 text-purple-800">
              1
            </Button>
            <Button variant="outline" className="border-purple-300 text-purple-700">
              2
            </Button>
            <Button variant="outline" className="border-purple-300 text-purple-700">
              3
            </Button>
            <span className="text-purple-700">...</span>
            <Button variant="outline" className="border-purple-300 text-purple-700">
              10
            </Button>
            <Button variant="outline" className="border-purple-300 text-purple-700">
              Next
            </Button>
          </nav>
        </div>
      </div>
    </main>
  )
}
