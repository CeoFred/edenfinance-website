import 'styles'
import { cn } from '~/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '~/provider/theme-provider'
import { retrive_theme } from '~/actions/theme'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Eden Finance - Garden of Eden onchain.',
  description: 'Eden Finance is your gateway to a decentralized financial ecosystem. Built on AssetChain, Eden offers a secure, transparent, and user-friendly platform for all your DeFi needs.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = await retrive_theme()
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('scroll-smooth antialiased', inter.variable)}>
        <ThemeProvider defaultTheme={theme}>
          <main className="bg-background font-inter relative mx-auto min-h-dvh w-full max-w-[1500px]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
