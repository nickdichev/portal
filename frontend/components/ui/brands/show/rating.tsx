'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Star, Info } from 'lucide-react'

type RatingCategory = {
    rating: number;
    name: string;
    description: string;
};

export default function Rating({ ratingCategories }: { ratingCategories: RatingCategory[] }) {
    const ratingRef = useRef<HTMLDivElement>(null)
    const [, setAnimate] = useState(false)

    const overallRating = 4.4

    const controls = useAnimation()
    const isInView = useInView(ratingRef, { once: true })

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }

        const timer = setTimeout(() => setAnimate(true), 500)
        return () => clearTimeout(timer)
    }, [controls, isInView])

    return (
        <div ref={ratingRef} className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 shadow-lg relative overflow-hidden mb-4">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")" }}></div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-gray-800 relative z-10">Overall Rating</h3>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 relative z-10">
                <div className="relative w-48 h-48 flex-shrink-0 lg:mt-4">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle
                            className="text-gray-200"
                            strokeWidth="6"
                            stroke="currentColor"
                            fill="transparent"
                            r="90"
                            cx="96"
                            cy="96"
                        />
                        <motion.circle
                            className="text-primary drop-shadow-md"
                            strokeWidth="6"
                            strokeDasharray={565.5}
                            strokeDashoffset={565.5 - (565.5 * overallRating) / 5}
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r="90"
                            cx="96"
                            cy="96"
                            initial={{ strokeDashoffset: 565.5 }}
                            animate={controls}
                            variants={{
                                visible: { strokeDashoffset: 565.5 - (565.5 * overallRating) / 5 },
                            }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </svg>
                    <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={controls}
                        variants={{
                            visible: { scale: 1, opacity: 1 },
                        }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <span className="text-4xl font-bold text-gray-800">{overallRating}</span>
                        <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={controls}
                                    variants={{
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ delay: 0.7 + i * 0.1 }}
                                >
                                    <Star
                                        className={`h-5 w-5 ${i < Math.floor(overallRating)
                                            ? 'text-yellow-400'
                                            : 'text-gray-300'
                                            } drop-shadow`}
                                        fill="currentColor"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div className="flex-1 w-full max-w-3xl">
                    {ratingCategories.map((category, index) => (
                        <div
                            key={index}
                            className="mb-3 last:mb-0"
                        >
                            <div className="flex justify-between items-center mb-1">
                                <div className="flex items-center">
                                    <span className="text-sm font-medium text-gray-700 mr-1">{category.name}</span>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Info className="h-3 w-3 text-gray-400" />
                                            </TooltipTrigger>
                                            <TooltipContent side="right">
                                                <p className="text-xs">{category.description}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                                <span className="text-xs font-bold text-gray-800">{category.rating}</span>
                            </div>
                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                                <motion.div
                                    className="h-full bg-primary rounded-full"
                                    style={{ width: `${(category.rating / 5) * 100}%` }}
                                    initial={{ width: 0 }}
                                    animate={controls}
                                    variants={{
                                        visible: { width: `${(category.rating / 5) * 100}%` },
                                    }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    whileHover={{ scale: 1.03 }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}