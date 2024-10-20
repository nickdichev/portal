'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { SuggestedBrand } from '@/models/Brand';
import { getSuggestedBrands } from '@/lib/brands';
import { createPocketBase } from '@/lib/pocketbase';

// Move the data fetching logic to this component
function SuggestedBrands() {
  const [suggestedBrands, setSuggestedBrands] = useState<SuggestedBrand[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const pb = createPocketBase();
    getSuggestedBrands(pb).then(brands => {
      setSuggestedBrands(brands);
      setIsLoading(false);
    });
  }, []);

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-3">Suggested Brands</h3>
        <SuggestedBrandsContent brands={suggestedBrands} isLoading={isLoading} />
      </CardContent>
    </Card>
  );
}

// Update SuggestedBrandsContent to receive props
function SuggestedBrandsContent({ brands, isLoading }: { brands: SuggestedBrand[], isLoading: boolean }) {
  if (isLoading) {
    return <Loader2 className="h-8 w-8 animate-spin mx-auto" />;
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {brands.map((brand, index) => (
        <div key={index} className="flex flex-col">
          <div className="aspect-w-3 aspect-h-4 w-full mb-2">
            <Link href={`/brands/${brand.slug}`} className="w-full h-full">
              <p className="text-sm font-medium truncate w-full">{brand.name}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SuggestedBrands;
