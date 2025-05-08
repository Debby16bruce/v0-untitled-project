"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { ThumbsUp, MessageCircle, Flag } from "lucide-react"

interface Comment {
  id: string
  user: {
    name: string
    avatar: string
  }
  content: string
  timestamp: string
  likes: number
  replies: Comment[]
}

interface CommentSectionProps {
  bookId: string
}

export function CommentSection({ bookId }: CommentSectionProps) {
  const [commentText, setCommentText] = useState("")

  // Mock comments data
  const comments: Comment[] = [
    {
      id: "1",
      user: {
        name: "BookLover42",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "I absolutely loved the concept of this book! The idea of a library between life and death where you can experience different versions of your life is so thought-provoking.",
      timestamp: "3 days ago",
      likes: 24,
      replies: [
        {
          id: "1-1",
          user: {
            name: "LiteraryExplorer",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "I agree! It really makes you think about all the choices you've made in life and how they've shaped who you are.",
          timestamp: "2 days ago",
          likes: 8,
          replies: [],
        },
      ],
    },
    {
      id: "2",
      user: {
        name: "PageTurner",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "The character development in this book was phenomenal. I felt like I was on the journey with Nora, experiencing all her emotions and revelations.",
      timestamp: "1 week ago",
      likes: 17,
      replies: [],
    },
  ]

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the comment to the server
    console.log("Submitting comment:", commentText)
    setCommentText("")
  }

  const renderComment = (comment: Comment, isReply = false) => (
    <div key={comment.id} className={`${isReply ? "ml-12 mt-4" : "mb-8"}`}>
      <div className="flex gap-4">
        <Avatar className="h-10 w-10">
          <img src={comment.user.avatar || "/placeholder.svg"} alt={comment.user.name} />
        </Avatar>

        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-purple-900">{comment.user.name}</span>
            <span className="text-sm text-purple-500">{comment.timestamp}</span>
          </div>

          <p className="text-purple-800 mb-3">{comment.content}</p>

          <div className="flex gap-4 text-sm">
            <button className="flex items-center text-purple-600 hover:text-purple-800">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>{comment.likes}</span>
            </button>
            <button className="flex items-center text-purple-600 hover:text-purple-800">
              <MessageCircle className="h-4 w-4 mr-1" />
              <span>Reply</span>
            </button>
            <button className="flex items-center text-purple-600 hover:text-purple-800">
              <Flag className="h-4 w-4 mr-1" />
              <span>Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Render replies */}
      {comment.replies.map((reply) => renderComment(reply, true))}
    </div>
  )

  return (
    <div>
      {/* Comment form */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="flex gap-4">
          <Avatar className="h-10 w-10">
            <img src="/placeholder.svg?height=40&width=40" alt="Your avatar" />
          </Avatar>

          <div className="flex-grow">
            <textarea
              className="w-full p-3 border border-purple-200 rounded-lg focus:ring-purple-500 focus:border-purple-500 min-h-[100px]"
              placeholder="Share your thoughts about this book..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>

            <div className="flex justify-end mt-2">
              <Button
                type="submit"
                className="bg-purple-700 hover:bg-purple-800 text-white"
                disabled={!commentText.trim()}
              >
                Post Comment
              </Button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments list */}
      <div>{comments.map((comment) => renderComment(comment))}</div>

      {/* Load more button */}
      <div className="text-center mt-6">
        <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
          Load More Comments
        </Button>
      </div>
    </div>
  )
}
