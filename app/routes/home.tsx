import type { Route } from './+types/home'
import { Link } from 'react-router'
import { Button } from '~/UI/Button'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Picsart Assignment" },
    { name: "description", content: "Solution by Jean Espindola" },
  ];
}

export default function HomePage() {
  return (
    <main className="flex justify-center py-24 px-2 h-full w-full bg-gray-100">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-4">
          <span className="text-[clamp(0.75em,3vw,3em)]">Welcome to Content Platform Picsart Assignment</span>
          <span className="text-[clamp(0.75em,3vw,2em)]">Solution by Jean Espindola</span>
        </header>
        <div className="flex flex-col items-center w-full space-y-6 px-4">
          <nav>
            <Link to="/photos" prefetch="intent">
              <Button label="Photo Masonry Grid" />
            </Link>
          </nav>
        </div>
      </div>
    </main>
  )
}
