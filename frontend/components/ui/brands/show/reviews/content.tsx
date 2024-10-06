'use client'

import { useState } from 'react'
import { Review } from '@/models/Brand'
import { Button } from "@/components/ui/button"
import AudioPlayer from './audio_player'

export default function ReviewContent({ review }: { review: Review }) {
    const [expandedContent, setExpandedContent] = useState<{ [key: string]: boolean }>({})

    const toggleContentExpansion = (contentType: string) => {
        const key = `${review.id}-${contentType}`
        setExpandedContent(prev => ({
            ...prev,
            [key]: !prev[key]
        }))
    }

    const renderExpandableContent = (content: string, contentType: string) => {
        const isExpanded = expandedContent[`${review.id}-${contentType}`] || false
        const maxLength = 300

        if (content.length <= maxLength) {
            return <p className="text-sm text-muted-foreground whitespace-pre-line">{content}</p>
        }

        return (
            <div>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {isExpanded ? content : `${content.slice(0, maxLength)}...`}
                </p>
                <Button
                    variant="link"
                    size="sm"
                    onClick={() => toggleContentExpansion(contentType)}
                    className="mt-2 p-0 h-auto font-normal"
                >
                    {isExpanded ? 'Read Less' : 'Read More'}
                </Button>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            <h4 className="text-lg font-semibold">{review.headline}</h4>
            {review.isAudioReview && review.audioUrl && (
                <AudioPlayer audioUrl={review.audioUrl} reviewId={review.id} />
            )}
            {renderExpandableContent(review.overall, 'content')}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h5 className="font-semibold text-sm mb-2">Pros</h5>
                    {renderExpandableContent(review.pros, 'pros')}
                </div>
                <div>
                    <h5 className="font-semibold text-sm mb-2">Cons</h5>
                    {renderExpandableContent(review.cons, 'cons')}
                </div>
            </div>
        </div>
    )
}
