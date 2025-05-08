import { Button } from "@/components/ui/button"
import { BookOpen, Star, MessageCircle, Share2, Bookmark, Heart } from "lucide-react"
import { CommentSection } from "@/components/comment-section"

export default function BookDetailPage({ params }: { params: { id: string } }) {
  // Mock book data
  const book = {
    id: params.id,
    title: "The Midnight Library",
    author: "Matt Haig",
    coverImage: "/placeholder.svg?height=600&width=400",
    rating: 4.2,
    publishedDate: "August 13, 2020",
    publisher: "Viking",
    pages: 304,
    isbn: "9780525559474",
    genres: ["Fiction", "Fantasy", "Contemporary"],
    description: `Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?
    
    A dazzling novel about all the choices that go into a life well lived, from the internationally bestselling author of Reasons to Stay Alive and How To Stop Time.
    
    Somewhere out beyond the edge of the universe there is a library that contains an infinite number of books, each one the story of another reality. One tells the story of your life as it is, along with another book for the other life you could have lived if you had made a different choice at any point in your life. While we all wonder how our lives might have been, what if you had the chance to go to the library and see for yourself? Would any of these other lives truly be better?`,
  }

  return (
    <main className="min-h-screen bg-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Book Header */}
          <div className="bg-gradient-to-r from-purple-800 to-purple-600 text-white p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Book Cover */}
              <div className="w-48 h-72 mx-auto md:mx-0 flex-shrink-0">
                <img
                  src={book.coverImage || "/placeholder.svg"}
                  alt={`Cover of ${book.title}`}
                  className="w-full h-full object-cover rounded-md shadow-lg"
                />
              </div>

              {/* Book Info */}
              <div className="flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{book.title}</h1>
                <p className="text-xl text-purple-100 mb-4">by {book.author}</p>

                <div className="flex items-center mb-6">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= Math.floor(book.rating) ? "fill-yellow-400 text-yellow-400" : "text-purple-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-purple-100">{book.rating} out of 5</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                  <div>
                    <p className="text-purple-200">Published</p>
                    <p className="text-white">{book.publishedDate}</p>
                  </div>
                  <div>
                    <p className="text-purple-200">Publisher</p>
                    <p className="text-white">{book.publisher}</p>
                  </div>
                  <div>
                    <p className="text-purple-200">Pages</p>
                    <p className="text-white">{book.pages}</p>
                  </div>
                  <div>
                    <p className="text-purple-200">ISBN</p>
                    <p className="text-white">{book.isbn}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {book.genres.map((genre) => (
                    <span key={genre} className="px-3 py-1 bg-purple-700 text-white rounded-full text-sm">
                      {genre}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button className="bg-white text-purple-800 hover:bg-purple-100">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Add to Reading List
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-purple-700">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Join Discussion
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-purple-700">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Book Content */}
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-purple-900">About the Book</h2>
              <div className="flex space-x-2">
                <Button variant="ghost" className="text-purple-700 hover:text-purple-900 hover:bg-purple-50">
                  <Bookmark className="h-5 w-5 mr-1" />
                  Save
                </Button>
                <Button variant="ghost" className="text-purple-700 hover:text-purple-900 hover:bg-purple-50">
                  <Heart className="h-5 w-5 mr-1" />
                  Like
                </Button>
              </div>
            </div>

            <div className="prose prose-purple max-w-none mb-12">
              <p className="whitespace-pre-line text-purple-900">{book.description}</p>
            </div>

            {/* Discussion Section */}
            <div className="border-t border-purple-100 pt-8">
              <h2 className="text-2xl font-bold text-purple-900 mb-6">Discussions</h2>
              <CommentSection bookId={book.id} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
