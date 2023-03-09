import './globals.css'

import Nav from '@/components/navigation/Nav'

export const metadata = {
  title: 'Mars - Graves Family',
  description: 'Graves family personal application.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Nav />
          {children}
        </div></body>
    </html>
  )
}
