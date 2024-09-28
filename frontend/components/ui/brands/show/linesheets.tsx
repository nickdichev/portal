'use client'

import { useState, useEffect } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Linesheets({ linesheets }: { linesheets: object[] }) {
  const [visibleLinesheets, setVisibleLinesheets] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleLinesheets(4);
      } else if (window.innerWidth >= 768) {
        setVisibleLinesheets(3);
      } else {
        setVisibleLinesheets(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="linesheets" className="bg-white rounded-lg p-4 sm:p-6 mb-4 shadow">
      <h3 className="text-lg sm:text-xl font-semibold mb-4">Linesheets</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        {linesheets.slice(0, visibleLinesheets).map((linesheet: any, i: number) => (
          <Card key={i} className="overflow-hidden">
            <div className="relative aspect-[3/4] bg-gray-200">
              <Image
                src={linesheet.image}
                alt={`${linesheet.season} Linesheet`}
                layout="fill"
                objectFit="cover"
              />
              {linesheet.isNew && (
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground text-[10px] sm:text-xs">
                  New
                </Badge>
              )}
            </div>
            <CardContent className="p-2 sm:p-3 flex flex-col h-[120px] sm:h-[140px]">
              <h4 className="font-semibold text-xs sm:text-sm mb-1 line-clamp-3 sm:line-clamp-2 h-12 sm:h-10">{linesheet.season}</h4>
              <div className="flex items-center text-[10px] sm:text-xs text-gray-600 mb-2">
                <Calendar className="w-3 h-3 mr-1" />
                <span>Available now</span>
              </div>
              <Button variant="default" size="sm" className="w-full mt-auto text-[10px] sm:text-xs py-1 sm:py-2">
                View Linesheets
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}