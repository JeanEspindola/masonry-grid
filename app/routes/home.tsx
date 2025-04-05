import type { Route } from './+types/home'
import { Link } from 'react-router'
import { Button } from '~/UI/Button'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Picsart Assignment" },
    { name: "description", content: "Solution by Jean Espindola" },
  ];
}

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-4">
          <span className="text-2xl">Welcome to Content Platform Picsart Assignment</span>
          <span className="text-base">Solution by Jean Espindola</span>
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
