import { Star } from 'lucide-react'
export default function Reviews({ reviews }: { reviews: object[] }) {
    return (
        <div className="bg-white rounded-lg p-4 shadow">
            {reviews.map((review: object, index: number) => (
                <div key={index} className={`${index > 0 ? 'mt-8 pt-8 border-t border-gray-200' : ''}`}>
                    <div className="flex items-start mb-4">
                        <div className="bg-teal-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-3">
                            {review.initials}
                        </div>
                        <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                <div>
                                    <h3 className="font-semibold text-sm">{review.name}</h3>
                                    <p className="text-xs text-gray-600">{review.role}</p>
                                    <p className="text-xs text-gray-600">{review.details}</p>
                                    <p className="text-xs text-gray-600">{review.location}</p>
                                </div>
                                <div className="mt-2 sm:mt-0 sm:text-right">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-600">{review.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">&quot;{review.title}&quot;</h4>
                    <div className="mb-2">
                        <h5 className="font-semibold text-sm">pros: what did you like?</h5>
                        <p className="text-xs text-gray-600">{review.pros}</p>
                    </div>
                    <div className="mb-2">
                        <h5 className="font-semibold text-sm">cons: what did you dislike?</h5>
                        <p className="text-xs text-gray-600">{review.cons}</p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-sm">overall: how was your experience?</h5>
                        <p className="text-xs text-gray-600">{review.overall}</p>
                        <a href="#" className="text-xs text-teal-500">read more</a>
                    </div>
                </div>
            ))}
        </div>
    )
}