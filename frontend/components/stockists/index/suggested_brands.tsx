'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Brand } from "@/models/Brand"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function SuggestedBrands({ suggestedBrands }: { suggestedBrands: Brand[] }) {
    const [carouselIndex, setCarouselIndex] = useState(0)

    const nextCarousel = () => {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % Math.ceil(suggestedBrands.length / 3))
    }

    const prevCarousel = () => {
        setCarouselIndex((prevIndex) => (prevIndex - 1 + Math.ceil(suggestedBrands.length / 3)) % Math.ceil(suggestedBrands.length / 3))
    }

    return <div>
        <Card className="flex-grow">
            <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-4">Suggested Brands</h3>
                <div className="relative">
                    <div className="flex gap-4">
                        {suggestedBrands.slice(carouselIndex * 3, carouselIndex * 3 + 3).map((brand, index) => (
                            <div key={index} className="flex-1">
                                {/* <div className="aspect-[3/4] relative mb-2">
                                <Image
                                    src={brand.image}
                                    alt={brand.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div> */}
                                <p className="text-sm font-medium text-center truncate">{brand.name}</p>
                            </div>
                        ))}
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={prevCarousel}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={nextCarousel}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
}