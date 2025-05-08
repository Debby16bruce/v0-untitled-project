import { LoadingSpinner } from "./components/loading-spinner"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-sky-800">Weather App</h1>
      <LoadingSpinner />
    </div>
  )
}
