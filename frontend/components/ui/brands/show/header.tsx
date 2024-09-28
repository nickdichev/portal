'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Heart, Flag, Star } from 'lucide-react'

export default function Header({ props }: { props: { brand: object, isSaved: boolean } }) {
    const { brand, isSaved } = props

    const headerRef = useRef<HTMLDivElement>(null)
    const [isSticky, setIsSticky] = useState(false)
    const [activeTab, setActiveTab] = useState('brand-info')

    const navigationTabs = [
        { id: 'brand-info', label: 'Brand Information' },
        { id: 'product-gallery', label: 'Product Gallery' },
        { id: 'linesheets', label: 'Linesheets' },
        { id: 'stockists', label: 'Stockists' },
        { id: 'reviews', label: 'Reviews' },
    ]

    const router = useRouter()

    const scrollToSection = (id: string) => {
        router.push(`#${id}`, { scroll: false });
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
          if (headerRef.current && window.innerWidth >= 768) {
            const headerRect = headerRef.current.getBoundingClientRect()
            const headerTop = headerRef.current.offsetTop
            setIsSticky(window.scrollY > headerTop && headerRect.top <= 0)
          } else {
            setIsSticky(false)
          }
    
          const scrollPosition = window.scrollY + 100
    
          navigationTabs.forEach(tab => {
            const element = document.getElementById(tab.id);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= scrollPosition && rect.bottom > scrollPosition) {
                setActiveTab(tab.id);
              }
            }
          });
        }
    
        window.addEventListener('scroll', handleScroll)
    
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, [])

        const toggleSave = () => { }

        return (
            <div
                ref={headerRef}
                className={`bg-white rounded-lg p-4 mb-4 shadow relative transition-all duration-300 ${isSticky ? 'md:fixed md:top-0 md:left-0 md:right-0 md:z-10 md:max-w-[1200px] md:mx-auto md:rounded-none md:shadow-md' : ''
                    }`}
            >
                <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center ${isSticky ? 'md:items-center' : ''}`}>
                    <h2 className={`text-2xl font-bold mb-4 sm:mb-0 ${isSticky ? 'md:text-xl md:mb-0' : ''}`}>SECULAR</h2>
                    <div className={`flex flex-col sm:flex-row gap-2 w-full sm:w-auto ${isSticky ? 'md:flex-row md:items-center' : ''}`}>
                        {isSticky && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={toggleSave}
                                className={`flex items-center gap-2 ${isSaved ? 'text-red-500 hover:text-red-600' : 'text-gray-500 hover:text-gray-600'
                                    }`}
                            >
                                <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
                                {isSaved ? 'Saved' : 'Save'}
                            </Button>
                        )}
                        <Button variant="default" className={`w-full sm:w-auto ${isSticky ? 'md:text-sm md:py-1' : ''}`}>
                            Visit Website
                        </Button>
                        <Button variant="default" className={`w-full sm:w-auto ${isSticky ? 'md:text-sm md:py-1' : ''}`}>
                            Request Linesheets
                        </Button>
                    </div>
                </div>
                <div className={`flex flex-col items-start gap-2 mt-2 ${isSticky ? 'md:hidden' : ''}`}>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-5 w-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">4.6 (8 reviews)</span>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleSave}
                        className={`flex items-center gap-2 px-0 ${isSaved ? 'text-red-500 hover:text-red-600' : 'text-gray-500 hover:text-gray-600'
                            }`}
                    >
                        <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
                        {isSaved ? 'Saved' : 'Save for Later'}
                    </Button>
                </div>
                {/* Navigation Tabs */}
                <div className={`mt-4 ${isSticky ? 'md:mt-2' : ''}`}>
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-0">
                        {navigationTabs.map((tab: any) => (
                            <Button
                                key={tab.id}
                                variant="ghost"
                                size="sm"
                                className={`w-full sm:w-auto text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 ${activeTab === tab.id ? 'bg-primary/10 text-primary' : 'text-gray-500'
                                    }`}
                                onClick={() => scrollToSection(tab.id)}
                            >
                                {tab.label}
                            </Button>
                        ))}
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="w-full sm:w-auto text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 text-yellow-600 hover:text-yellow-700"
                                    >
                                        <Flag className="h-4 w-4 mr-1 sm:mr-2" />
                                        Unclaimed Profile
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="bottom" align="end" className="w-64 sm:w-80">
                                    <p className="text-sm">Is this your brand's profile? Click here to claim your listing to update the content and reply to buyer's inquiries</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </div>
        )
    }