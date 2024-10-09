import { Star } from "lucide-react";

export default function StarRating({ avg_rating, review_count }: { avg_rating: number, review_count: number }) {
    return <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={`h-5 w-5 ${i < Math.floor(avg_rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
            />
        ))}
        <span className="ml-2 text-sm text-gray-600">
            {avg_rating.toFixed(1)} ({review_count} reviews)
        </span>
    </div>
}