'use client'
import { useState } from "react";

import { Brand } from "@/models/Brand";
import { Stockist } from "@/models/Stockist";
import { ChevronRight, ChevronLeft, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import StockistsCard from "./stockists_card";
import StockistsMap from "./map";
import SuggestedBrands from "./suggested_brands";

export default function StockistsList({ brand, stockists }: { brand: Brand, stockists: Stockist[] }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [showMap, setShowMap] = useState(true)

    const [filters, setFilters] = useState({
        location: [],
        pricePoint: [],
        category: [],
        type: []
    })

    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 1

    const filteredStockists = stockists.filter(stockist =>
        stockists
    )

    return <div className="bg-white rounded-lg p-4 shadow">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Stockists</h3>
            <p className="text-sm text-gray-600">
                Total Stockists: <span className="font-semibold">{filteredStockists.length}</span>
            </p>
        </div>

        <p className="text-sm text-gray-600 mb-4">
            Explore our curated list of {brand.name} stockists, ranging from luxury department stores to trendy boutiques and e-commerce platforms. Find the perfect partners for your fashion business by location, price point, and category.
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/2">
                <div className="relative mb-4">
                    <Input
                        type="text"
                        placeholder="Search stockists..."
                        value={searchTerm}
                        onChange={(e) => {
                        }}
                        className="w-full pl-10 text-sm"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
                <div className="flex flex-col h-[600px]">
                    <div className="flex-grow overflow-y-auto space-y-2 pr-2 mb-4">
                        {stockists.map((stockist) => (
                            <StockistsCard key={stockist.id} stockist={stockist} />
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-auto pt-4 border-t">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft className="h-4 w-4 mr-2" />
                            Previous
                        </Button>
                        <span className="text-sm text-gray-600">
                            Page {currentPage} of {totalPages}
                        </span>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                            <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowMap(!showMap)}
                    className="w-full mb-4 lg:hidden"
                >
                    {showMap ? 'Hide Map' : 'Show Map'}
                </Button>

                {showMap && <div className="flex flex-grow flex-col">
                    <StockistsMap stockists={stockists} />
                </div>}

                <SuggestedBrands suggestedBrands={[brand]}/>
            </div>
        </div>
    </div>
}