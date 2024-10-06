'use client'

import { useState } from 'react'
import Image from "next/image"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ReviewImages({ images }: { images: string[] }) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

    const openImagePreview = (index: number) => {
        setCurrentImageIndex(index)
        setSelectedImage(images[index])
    }

    const closeImagePreview = () => {
        setSelectedImage(null)
        setCurrentImageIndex(0)
    }

    const navigateImage = (direction: 'prev' | 'next') => {
        if (images.length === 0) return

        let newIndex = currentImageIndex
        if (direction === 'prev') {
            newIndex = (currentImageIndex - 1 + images.length) % images.length
        } else {
            newIndex = (currentImageIndex + 1) % images.length
        }

        setCurrentImageIndex(newIndex)
        setSelectedImage(images[newIndex])
    }

    return (
        <div className="mt-4">
            <h5 className="font-semibold text-sm mb-2">Review Images</h5>
            <div className="flex flex-wrap gap-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className="relative w-24 h-24 overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        onClick={() => openImagePreview(index)}
                    >
                        <Image
                            src={image}
                            alt={`Review image ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                        />
                    </button>
                ))}
            </div>

            <Dialog open={!!selectedImage} onOpenChange={closeImagePreview}>
                <DialogContent className="sm:max-w-[90vw] sm:max-h-[90vh] p-0">
                    <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </DialogClose>
                    {selectedImage && (
                        <div className="relative w-full h-[80vh]">
                            <Image
                                src={selectedImage}
                                alt="Preview"
                                layout="fill"
                                objectFit="contain"
                            />
                            <div className="absolute inset-0 flex items-center justify-between p-4">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => navigateImage('prev')}
                                    className="rounded-full bg-background/80 text-foreground"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => navigateImage('next')}
                                    className="rounded-full bg-background/80 text-foreground"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
