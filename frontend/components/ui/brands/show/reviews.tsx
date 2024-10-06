import { Review } from '@/models/Brand'
import ReviewCard from './reviews/card'

export default function Reviews({ reviews }: { reviews: Review[] }) {
    return (
        <div className="space-y-6">
            {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
            ))}
        </div>
    )
}