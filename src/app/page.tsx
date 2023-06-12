import { Inter } from 'next/font/google'
import { Animation, Clients, Dedications, Feature, Footer, HeaderHero } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div className={`${inter.className}`}>
            <HeaderHero />
            <Dedications />
            <Feature />
            <Animation />
            <Clients />
            <Footer />
        </div>
    )
}
