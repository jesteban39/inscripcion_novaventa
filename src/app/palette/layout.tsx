import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Palette',
  description: 'Palette theme MUI'
}

export default function PaletteLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <>{children}</>
}
