'use client'

import { useState } from 'react'
import { Review } from '@/models/Brand'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ChevronUp, ChevronDown, ThumbsUp, ThumbsDown } from 'lucide-react'

export default function ReviewExpander({ review }: { review: Review }) {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <>
            {isExpanded && (
                <div className="space-y-4">
                    <Separator />
                    <div>
                        <h5 className="font-semibold text-sm mb-2">Additional Insights</h5>
                        {/* {review.customQuestions.map((q, index) => (
                            <div key={index} className="mb-3">
                                <p className="text-sm font-medium">{q.question}</p>
                                <p className="text-sm text-muted-foreground">{q.answer}</p>
                            </div>
                        ))} */}
                    </div>
                </div>
            )}

            <div className="flex items-center justify-between">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleExpansion}
                    className="text-primary hover:text-primary-dark transition-colors duration-200"
                >
                    {isExpanded ? (
                        <>
                            Show Less <ChevronUp className="ml-1 h-4 w-4" />
                        </>
                    ) : (
                        <>
                            Show More <ChevronDown className="ml-1 h-4 w-4" />
                        </>
                    )}
                </Button>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{new Date(review.created).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                            <ThumbsUp className="mr-1 h-4 w-4" />
                            {review.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                            <ThumbsDown className="mr-1 h-4 w-4" />
                            {review.dislikes}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
