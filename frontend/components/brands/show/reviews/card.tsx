import { BrandReview } from '@/models/Brand'
import { Card, CardContent } from "@/components/ui/card"

import ReviewHeader from './header'
import ReviewContent from './content'
import ReviewImages from './images'
import ReviewRatings from './ratings'
import ReviewExpander from './expander'

export default function ReviewCard({ review }: { review: BrandReview }) {
    return (
        <Card key={review.id} className="overflow-hidden">
            <CardContent className="p-6">
                <ReviewHeader review={review} />
                <ReviewContent review={review} />
                {review.images && review.images.length > 0 && (
                    <ReviewImages images={review.images} />
                )}
                <ReviewRatings review={review} />
                <ReviewExpander review={review} />
            </CardContent>
        </Card>
    )
}
