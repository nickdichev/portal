import { Card, CardContent } from "@/components/ui/card"
import { Stockist } from "@/models/Stockist"
import Image from "next/image"
import { MapPin } from "lucide-react"

export default async function FeaturedStockistCard({ stockist }: { stockist: Stockist }) {
    return <Card className="hover:shadow-md transition-shadow duration-200">
        <CardContent className="p-3">
            <div className="flex items-center">
          <div className="w-10 h-10 relative rounded-full overflow-hidden bg-gray-200 flex-shrink-0 hidden sm:block">
            <Image src={stockist.image} alt={stockist.name} layout="fill" objectFit="cover" />
          </div>
          <div className="sm:ml-3">
            <h4 className="font-semibold text-sm">{stockist.name}</h4>
            <p className="text-xs text-gray-600 flex items-center">
              <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
              <span>{stockist.location}</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
}