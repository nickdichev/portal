'use client'

import { useState } from 'react'
import { Brand } from '@/models/Brand'

export default function InfoCard({ brand }: { brand: Brand }) {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div id="brand-info" className="bg-white rounded-lg p-4 mb-4 shadow">
      <h3 className="text-lg font-semibold mb-2">{brand.name} brand wholesale information & reviews</h3>
      <p className="text-sm text-gray-600 mb-4">
        {brand.description ? (
          <>
            {isExpanded ? (
              brand.description
            ) : (
              <>
                {brand.description.slice(0, 200)}...{' '}
                <button onClick={() => setIsExpanded(true)} className="text-teal-500 hover:text-teal-600">
                  read more
                </button>
              </>
            )}
          </>
        ) : (
          'No description available.'
        )}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
        <div>
          <h4 className="font-semibold">website</h4>
          <p className="text-gray-600">
            {brand.website && brand.website.replace(/^https?:\/\//, '')}
          </p>
        </div>
        <div>
          <h4 className="font-semibold">company</h4>
          <p className="text-gray-600">{brand.company || brand.name}</p>
        </div>
        <div>
          <h4 className="font-semibold">retail price</h4>
          <p className="text-gray-600">${brand.price_range_low}-${brand.price_range_high}</p>
        </div>
        <div>
          <h4 className="font-semibold">headquarters</h4>
          <p className="text-gray-600">{brand.headquarters}</p>
        </div>
        <div>
          <h4 className="font-semibold">founded</h4>
          <p className="text-gray-600">{brand.year_established}</p>
        </div>
        <div>
          <h4 className="font-semibold">product categories</h4>
          <p className="text-gray-600">{brand.expand?.categories?.map(category => category.name).join(', ')}</p>
        </div>
      </div>
      {/* <div className="mt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleExpand}
                className="flex items-center text-teal-500 hover:text-teal-600 transition-colors duration-200"
                aria-expanded={isExpanded}
                aria-controls="more-info"
              >
                {isExpanded ? 'View less' : 'View more'}
                {isExpanded ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </Button>
              {isExpanded && (
                <div id="more-info" className="mt-4 text-sm text-gray-600">
                  <h4 className="font-semibold mb-2">About SECULAR</h4>
                  <p className="mb-2">
                    SECULAR is a contemporary women's fashion brand that focuses on sustainable and ethical production practices.
                    Founded in 2018 by designer Sarah Chen, the brand aims to create timeless pieces that transcend seasonal trends.
                  </p>
                  <h4 className="font-semibold mb-2">Production</h4>
                  <p className="mb-2">
                    All SECULAR garments are produced in small batches in Los Angeles, California. The brand works closely with local
                    artisans and uses eco-friendly fabrics sourced from Italy and Japan.
                  </p>
                  <h4 className="font-semibold mb-2">Design Philosophy</h4>
                  <p>
                    SECULAR's designs are characterized by clean lines, minimalist aesthetics, and versatile silhouettes. The brand
                    focuses on creating pieces that can be easily mixed and matched, promoting a more sustainable approach to fashion.
                  </p>
                </div>
              )}
            </div> */}
    </div>
  )
}