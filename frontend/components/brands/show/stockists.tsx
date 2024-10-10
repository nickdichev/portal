import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin } from "lucide-react"

type Stockist = {
    name: string;
    location: string;
    type: string;
};

export default function Stockists({ slug, stockists }: { slug: string, stockists: Stockist[] }) {
    return (
        <div id="stockists" className="bg-white rounded-lg p-6 mb-4 shadow">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Stockists</h3>
                <Button variant="outline">
                    <Link href={`/brands/${slug}/stockists`}>View All Stockists</Link>
                </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stockists.map((stockist, i) => (
                    <Card key={i}>
                        <CardContent className="p-4">
                            <Link href={`/stockists/${stockist.name.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                                <h4 className="font-semibold text-lg mb-1">{stockist.name}</h4>
                                <div className="flex items-center text-sm text-gray-600 mb-1">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    <span>{stockist.location}</span>
                                </div>
                                <p className="text-sm text-gray-500">{stockist.type}</p>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
)
}