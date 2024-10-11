'use client'

import { useRef, useState, useEffect } from 'react'

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRightIcon } from "lucide-react"
import Image from 'next/image'

export default function ProductGallery({ productImages }: { productImages: string[] }) {
    const galleryRef = useRef<HTMLDivElement>(null)
    const productGalleryRef = useRef<HTMLDivElement>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [visibleImages, setVisibleImages] = useState(4)

    useEffect(() => {
        const updateVisibleImages = () => {
          if (galleryRef.current) {
            const galleryWidth = galleryRef.current.offsetWidth
            const imageWidth = 250 // Increased width of each image including gap
            const newVisibleImages = Math.floor(galleryWidth / imageWidth)
            setVisibleImages(Math.max(newVisibleImages, 1)) // Ensure at least one image is visible
          }
        }
    
        updateVisibleImages()
        window.addEventListener('resize', updateVisibleImages)
    
        return () => {
          window.removeEventListener('resize', updateVisibleImages)
        }
      }, [])

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
        )
    }

    const shouldShowArrows = productImages.length > visibleImages

    return (
        <div ref={productGalleryRef} className="bg-white rounded-lg p-4 mb-4 shadow">
            <h3 className="text-lg font-semibold mb-2">Product Gallery</h3>
            <div className="relative" ref={galleryRef}>
                <div className="flex overflow-hidden">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${(currentImageIndex * 100) / visibleImages}%)` }}
                    >
                        {[...productImages, ...productImages.slice(0, visibleImages)].map((src, i) => (
                            <div key={i} className="w-1/4 flex-shrink-0 p-2">
                                <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-md overflow-hidden">
                                    <Image 
                                        src={src} 
                                        alt={`Product ${(i % productImages.length) + 1}`} 
                                        layout="responsive"
                                        width={200}
                                        height={200}
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {shouldShowArrows && (
                    <>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={prevImage}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={nextImage}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2"
                            aria-label="Next image"
                        >
                            <ChevronRightIcon className="h-6 w-6" />
                        </Button>
                    </>
                )}
            </div>
        </div>
    )
}