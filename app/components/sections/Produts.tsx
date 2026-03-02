"use client"

import React from "react"
import "aos/dist/aos.css"

interface FeatureCardItem {
  icon: React.ReactNode
  title: string
  description: string
}

interface HeroSectionData {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

interface FeatureGridData {
  title: string
  description: string
  features: FeatureCardItem[]
}

interface PaymentSectionProps {
  heroData: HeroSectionData
  gridData: FeatureGridData
  accentColor?: string
}

const FeatureCard: React.FC<FeatureCardItem & { delay?: number }> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex flex-col items-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center"
    >
      <div className="mb-6 p-4 bg-gray-100 rounded-2xl text-(--primary-light) w-14 h-14 flex items-center justify-center">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-(--primary-light) mb-3">
        {title}
      </h3>

      <p className="text-sm text-gray-600 max-w-62.5">
        {description}
      </p>
    </div>
  )
}

export const FeatureSection: React.FC<PaymentSectionProps> = ({
  heroData,
  gridData,
}) => {

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24 font-sans text-gray-900" >

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-32">
        
        <div
          data-aos="fade-right"
          className="w-full md:w-1/2 space-y-4"
          style={{overflow: "clip"}}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-(--primary-light) tracking-tight">
            {heroData.title}
          </h2>

          <p className="text-base leading-relaxed max-w-md">
            {heroData.description}
          </p>
        </div>

        <div
          data-aos="fade-down"
          data-aos-delay="100"
          className="w-full md:w-1/2 flex justify-center relative"
          style={{overflow: "clip"}}
        >
          <div className="absolute inset-0 bg-lime-100 transform rotate-45 scale-75 rounded-3xl -z-10 blur-xl opacity-60" />
          
          <div className="relative z-10">
            <img
              src={heroData.imageSrc}
              alt={heroData.imageAlt}
              className="object-contain max-h-100 w-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">

        <div
          data-aos="fade-up"
          className="text-center max-w-2xl mb-16 space-y-2"
          style={{overflow: "clip"}}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            {gridData.title}
          </h2>

          <p className="text-gray-600 text-sm">
            {gridData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {gridData.features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 120}
            />
          ))}
        </div>

      </div>
    </div>
  )
}