/** Library */
import NextTopLoader from 'nextjs-toploader'

/** Font */
import { Roboto } from 'next/font/google'

/** Type */
import type { Metadata } from 'next'

/** Store */
import ReduxProvider from '@store/provider'
import ReduxPersistor from '@store/provider'

/** Style */
import '@styles/globals.css'
import { Suspense } from 'react'
import Loading from './loading'

/** Meta data */
export const metadata: Metadata = {
  title: 'Stryket Trend',
  icons: {
    icon: '/favicons/favicon-32x32.png',
  },
}

/** Font config */
const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

/** Root layout */
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <NextTopLoader />
        <main>
          <Suspense fallback={<Loading />}>
            <ReduxProvider>
              <ReduxPersistor>{children}</ReduxPersistor>
            </ReduxProvider>
          </Suspense>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
