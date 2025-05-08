"use client"

import { useState, type FormEvent } from "react"
import { SearchIcon } from "lucide-react"

interface SearchProps {
  onSearch: (city: string) => void
}

export function Search({ onSearch }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("")

  /**
   * Handles the search form submission
   * @param e The form submission event
   */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <div className="join w-full max-w-md">
        <input
          type="text"
          placeholder="Enter city name..."
          className="input input-bordered join-item flex-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
          aria-label="Search for a city"
        />
        <button type="submit" className="btn join-item btn-primary" aria-label="Search">
          <SearchIcon className="h-5 w-5 mr-1" />
          Search
        </button>
      </div>
    </form>
  )
}
