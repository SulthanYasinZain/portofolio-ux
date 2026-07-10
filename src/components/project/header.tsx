import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router'

export default function Header({title} : {title :string}) {
  return (
    <nav className="grid grid-cols-3 items-center text-stone-800 w-full px-4 py-3 bg-stone-100">
        <button className="flex items-center gap-1 hover:bg-stone-200 transition-all duration-300 rounded px-3 py-1.5  font-medium w-fit">
          <Link to="/" className="flex items-center gap-1">
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
        </button>

        <h1 className="text-base font-medium  whitespace-nowrap">
          Bibo: A dyslexia adadadasdadadad
        </h1>

      <div className="hidden" />
    </nav>

  )
}
