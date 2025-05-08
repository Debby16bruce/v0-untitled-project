import { MessageCircle, Clock } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface DiscussionPreviewProps {
  discussion: {
    id: string
    title: string
    bookTitle: string
    author: string
    commentCount: number
    createdAt: string
  }
}

export function DiscussionPreview({ discussion }: DiscussionPreviewProps) {
  return (
    <Link href={`/discussions/${discussion.id}`}>
      <Card className="transition-all duration-200 hover:shadow-md hover:border-purple-300">
        <CardContent className="p-6">
          <h3 className="font-bold text-xl text-purple-900 mb-2">{discussion.title}</h3>
          <p className="text-purple-700 mb-4">Book: {discussion.bookTitle}</p>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-purple-600">
              <span>Started by {discussion.author}</span>
            </div>

            <div className="flex space-x-4">
              <div className="flex items-center text-purple-600">
                <MessageCircle className="h-4 w-4 mr-1" />
                <span>{discussion.commentCount} comments</span>
              </div>

              <div className="flex items-center text-purple-600">
                <Clock className="h-4 w-4 mr-1" />
                <span>{discussion.createdAt}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
