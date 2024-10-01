import type { Metadata } from 'next'
import { Fira_Mono } from 'next/font/google'

import './globals.css'
import { Providers } from './Providers'

const inter = Fira_Mono({ subsets: ['cyrillic', 'latin'], weight: '400' })

export const metadata: Metadata = {
	title: 'Bench press boss',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
