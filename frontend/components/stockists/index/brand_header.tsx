'use client'

import { useState } from "react";

import { Button } from "../../ui/button";
import { Heart } from "lucide-react";
import StarRating from "@/components/ui/star_rating";

import { Brand, BrandRating } from "@/models/Brand";

export default function BrandHeader({ brand, brand_rating }: { brand: Brand, brand_rating: BrandRating }) {
  const [isSaved, setIsSaved] = useState(false)

  const toggleSave = () => {
    setIsSaved(!isSaved)
  }

    return <div>
        <div className="bg-white rounded-lg p-4 mb-4 shadow">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h2 className="text-xl font-bold mb-2 sm:mb-0">{brand.name}</h2>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <Button variant="default" className="w-full sm:w-auto text-sm" onClick={() => window.open(brand.website, '_blank')}>
                        Visit Website
                    </Button>
                    <Button variant="default" className="w-full sm:w-auto text-sm">
                        Request Linesheets
                    </Button>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <StarRating avg_rating={brand_rating.avg_rating} review_count={brand_rating.review_count} />
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleSave}
                    className={`flex items-center gap-1 px-2 text-xs ${isSaved ? 'text-red-500 hover:text-red-600' : 'text-gray-500 hover:text-gray-600'
                        }`}
                >
                    <Heart className={`h-3 w-3 ${isSaved ? 'fill-current' : ''}`} />
                    {isSaved ? 'Saved' : 'Save'}
                </Button>
            </div>
        </div>
    </div>
}