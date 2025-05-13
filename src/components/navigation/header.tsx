'use client'

import Link from 'next/link'
import { Button } from 'ui/button'
import LogoIcon from '../icons/logo'
import { ThemeToggle } from '../miscellaneous/toggle'

export default function Navbar() {
  return (
    <nav className="bg-background/80 sticky top-0 z-50 w-full border-b border-purple-500/10 shadow-sm backdrop-blur-md dark:bg-black/80">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <LogoIcon />
              <span className="text-lg font-medium">Eden Finance</span>
            </Link>
          </div>
          <div className="flex gap-2">
            <ThemeToggle />
            <Button
              asChild
              className="bg-purple-500 text-white hover:bg-purple-600"
            >
              <Link
                href="https://app.eden-finance.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch App
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-100 dark:hover:bg-purple-900"
            >
              <Link
                href="https://leaderboard.eden-finance.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Leaderboard
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
