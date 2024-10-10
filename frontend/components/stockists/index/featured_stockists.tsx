import { Stockist } from "@/models/Stockist";
import FeaturedStockistCard from "./featured_stockist_card";

export default async function FeaturedStockists({ featuredStockists }: { featuredStockists: Stockist[] }) {
    return <div className="bg-white rounded-lg p-4 mb-4 shadow">
        <h2 className="text-lg font-semibold mb-4">Featured Stockists</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredStockists.map((stockist) => (
                <FeaturedStockistCard key={stockist.id} stockist={stockist} />
            ))}
        </div>
    </div>
}