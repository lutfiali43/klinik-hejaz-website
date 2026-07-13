'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

type Slide = {
  src: string
  alt: string
  caption?: string
}

export function TreatmentHeroSlider({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="relative min-h-[260px] overflow-hidden rounded-3xl sm:min-h-[340px] lg:min-h-full">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === active ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== active}
        >
          <Image
            src={slide.src || '/placeholder.svg'}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 20vw"
            className="object-cover"
          />
          {slide.caption && (
            <>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute inset-x-0 bottom-0 p-5 font-logo text-lg font-extrabold italic text-white drop-shadow sm:text-xl">
                {slide.caption}
              </p>
            </>
          )}
        </div>
      ))}

      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Tunjuk gambar ${index + 1}`}
              aria-current={index === active}
              className={`h-2.5 rounded-full transition-all ${
                index === active
                  ? 'w-6 bg-white'
                  : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
