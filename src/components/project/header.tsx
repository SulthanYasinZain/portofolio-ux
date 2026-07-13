import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router'

type HeaderProps = {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <nav className="w-full flex justify-center bg-stone-100">
      <div className="flex w-full max-w-xl items-center gap-2 px-4 py-3">
        <Link
          to="/"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded hover:bg-stone-200"
          viewTransition
        >
          <ChevronLeft className="h-4 w-4" />
        </Link>

        <h1 className="min-w-0 flex-1 truncate text-sm font-medium">
          {title}
        </h1>
      </div>
    </nav>
  )
}
