
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap'
})

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  title: 'A+ ENGENHARIA: Construindo o Futuro, Transformando Investimentos',
  description: 'A+ ENGENHARIA une excelência em construção, neuroarquitetura e tecnologia financeira para criar empreendimentos com propósito e valorização exponencial. Soluções inovadoras em tokenização, crédito próprio e financiamento flexível.',
  keywords: 'engenharia, construção, fintech, tokenização, investimento imobiliário, crédito próprio, neuroarquitetura, projetos, imóveis, tecnologia financeira, A+ ENGENHARIA',
  authors: [{ name: 'A+ ENGENHARIA' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'A+ ENGENHARIA: Construindo o Futuro, Transformando Investimentos',
    description: 'A+ ENGENHARIA une excelência em construção, neuroarquitetura e tecnologia financeira para criar empreendimentos com propósito e valorização exponencial.',
    url: `https://gabrieljaccoud.github.io${BASE_PATH}/`,
    siteName: 'A+ ENGENHARIA',
    images: [
      {
        url: `https://gabrieljaccoud.github.io${BASE_PATH}/images/hero_background.png`, // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: 'A+ ENGENHARIA - Construindo o Futuro',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A+ ENGENHARIA: Construindo o Futuro, Transformando Investimentos',
    description: 'A+ ENGENHARIA une excelência em construção, neuroarquitetura e tecnologia financeira para criar empreendimentos com propósito e valorização exponencial.',
    images: [`https://gabrieljaccoud.github.io${BASE_PATH}/images/hero_background.png`], // Replace with actual image URL
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}


