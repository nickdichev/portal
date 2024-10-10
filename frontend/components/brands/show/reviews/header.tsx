'use client'

import { BrandReview } from '@/models/Brand'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Mic, Image as ImageIcon } from 'lucide-react'

export default function ReviewHeader({ review }: { review: BrandReview }) {
    const renderOverallRating = (rating: number) => {
        return (
            <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-bold">{rating.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground">/ 5</span>
            </div>
        )
    }

    return (
        <div className="flex items-start space-x-4">
            {/* <Avatar className="h-12 w-12">
                <AvatarImage src={} alt={} />
                <AvatarFallback>{}</AvatarFallback>
            </Avatar> */}
            <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{review.isAnonymous ? "Anonymous Review" : "Reviewer's Name"}</h3>
                    {renderOverallRating(review.rating)}
                </div>
                <p className="text-sm text-muted-foreground">Reviewers Job Title</p>
                <p className="text-sm text-muted-foreground">Reviewers Location</p>
                <div className="flex space-x-2">
                    {review.isVerified && (
                        <Badge variant="secondary">
                            <CheckCircle2 className="mr-1 h-3 w-3" /> Verified Brand
                        </Badge>
                    )}
                    {review.isAudioReview && (
                        <Badge variant="secondary">
                            <Mic className="mr-1 h-3 w-3" /> Audio Review
                        </Badge>
                    )}
                    {review.images && review.images.length > 0 && (
                        <Badge variant="secondary">
                            <ImageIcon className="mr-1 h-3 w-3" /> {review.images.length} Image{review.images.length > 1 ? 's' : ''}
                        </Badge>
                    )}
                </div>
            </div>
        </div>
    )
}
