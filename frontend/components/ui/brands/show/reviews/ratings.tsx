import { BrandReview } from '@/models/Brand'

export default function ReviewRatings({ review }: { review: BrandReview }) {
    const renderAspectRatings = (review: BrandReview) => {
        const subratingLabels = {
            subrating_product_quality: "Product Quality",
            subrating_order_fulfillment: "Order Fulfillment",
            subrating_support: "Support",
            subrating_brand_reputation: "Brand Reputation"
        }

        const subratings: (keyof typeof subratingLabels)[] = [
            'subrating_product_quality',
            'subrating_order_fulfillment',
            'subrating_support',
            'subrating_brand_reputation'
        ]

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subratings.map((subrating) => (
                    <div key={subrating} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{subratingLabels[subrating]}</span>
                        <div className="flex items-center">
                            <span className="font-medium mr-2">{review[subrating]}</span>
                            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary"
                                    style={{ width: `${(review[subrating] / 5) * 100}%` }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            <h5 className="font-semibold text-sm mb-2">Ratings Breakdown</h5>
            {renderAspectRatings(review)}
        </div>
    )
}
