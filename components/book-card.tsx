import { Star } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface BookCardProps {
  book: {
    id: string
    title: string
    author: string
    coverImage: string
    rating: number
  }
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book.id}`}>
      <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-[2/3] relative">
          <img
            src={book.coverImage || "/placeholder.svg"}
            alt={`Cover of ${book.title}`}
            className="object-cover w-full h-full"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg text-purple-900 line-clamp-1">{book.title}</h3>
          <p className="text-purple-700 mb-2">{book.author}</p>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-purple-500 text-purple-500 mr-1" />
            <span className="text-sm text-purple-900">{book.rating.toFixed(1)}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
