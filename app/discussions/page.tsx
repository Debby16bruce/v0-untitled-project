import { Button } from "@/components/ui/button"
import { DiscussionPreview } from "@/components/discussion-preview"
import { Search, Filter, PlusCircle } from "lucide-react"

export default function DiscussionsPage() {
  // Mock data for discussions
  const discussions = [
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
    {
      id: "3",
      title: "Scientific accuracy in Project Hail Mary",
      bookTitle: "Project Hail Mary",
      author: "SciFiEnthusiast",
      commentCount: 32,
      createdAt: "1 week ago",
    },
    {
      id: "4",
      title: "The portrayal of grief in The Song of Achilles",
      bookTitle: "The Song of Achilles",
      author: "MythologyFan",
      commentCount: 15,
      createdAt: "2 weeks ago",
    },
    {
      id: "5",
      title: "Feminist themes in Circe",
      bookTitle: "Circe",
      author: "ClassicsReader",
      commentCount: 27,
      createdAt: "3 weeks ago",
    },
  ]

  // Mock categories for filter
  const categories = [
    "Book Analysis",
    "Character Discussion",
    "Plot Theories",
    "Author Insights",
    "Reading Experience",
    "Book Comparisons",
    "Book to Screen",
  ]

  return (
    <main className="min-h-screen bg-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-purple-900">Discussions</h1>
          <Button className="bg-purple-700 hover:bg-purple-800 text-white">
            <PlusCircle className="h-5 w-5 mr-2" />
            Start Discussion
          </Button>
        </div>

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
                placeholder="Search discussions..."
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

          {/* Category Filter Pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Discussions List */}
        <div className="space-y-6">
          {discussions.map((discussion) => (
            <DiscussionPreview key={discussion.id} discussion={discussion} />
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
