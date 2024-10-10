import { Card, CardContent } from "@/components/ui/card"
import { Stockist } from "@/models/Stockist"
import Image from "next/image"
import { MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"

export default function StockistsCard({ stockist }: { stockist: Stockist }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const [selectedStockist, setSelectedStockist] = useState(null)
    const stockistRefs = useRef({})

    const toggleFavorite = () => {
        setIsFavorite(prev => !prev)
    }

    return <Card 
      key={stockist.id} 
      className={`transition-all duration-200 ${selectedStockist?.id === stockist.id ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'}`}
      ref={el => stockistRefs.current[stockist.id] = el}
    >
      <CardContent className="p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 relative rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
              <Image src={stockist.image} alt={stockist.name} layout="fill" objectFit="cover" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">{stockist.name}</h4>
              <p className="text-xs text-gray-600 flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                {stockist.location}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleFavorite}
            className={`flex items-center gap-1 px-2 text-xs ${
              isFavorite ? 'text-red-500 hover:text-red-600' : 'text-gray-500 hover:text-gray-600'
            }`}
          >
            <Heart className={`h-3 w-3 ${isFavorite ? 'fill-current' : ''}`} />
            {isFavorite ? 'Favorited' : 'Favorite'}
          </Button>
        </div>
      </CardContent>
    </Card>
}