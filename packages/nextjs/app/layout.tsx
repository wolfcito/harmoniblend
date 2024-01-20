import '@rainbow-me/rainbowkit/styles.css'
import { Metadata } from 'next'
import { ScaffoldEthAppWithProviders } from '~~/components/ScaffoldEthAppWithProviders'
import '~~/styles/globals.css'

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : `http://localhost:${process.env.PORT}`
const imageUrl = `${baseUrl}/thumbnail.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Harmoniblend App',
    template: '%s | Harmoniblend',
  },
  description: 'Harmoniblend',
  openGraph: {
    title: {
      default: 'Harmoniblend App',
      template: '%s | Harmoniblend',
    },
    description: 'Harmoniblend',
    images: [
      {
        url: imageUrl,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [imageUrl],
    title: {
      default: 'Harmoniblend',
      template: '%s | Harmoniblend',
    },
    description: 'Harmoniblend',
  },
  icons: {
    icon: [{ url: '/favicon.png', sizes: '32x32', type: 'image/png' }],
  },
}

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
      </body>
    </html>
  )
}

export default ScaffoldEthApp
