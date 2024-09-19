'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <div>
      <main className="grow">
        <Navigation />
        {children}
        <Footer />
      </main>
    </div>
  )
}
